import { RECEIVE_CITY_WEATHER, UPDATE_DAY_OFFSET } from '../actions/types'

const FORECASTS_PER_DAY = 8
const FORECASTED_DAYS = 2

const weatherDefault = {
  city: '',
  country: '',
  hours: Math.NaN,
  temperature: Math.Nan,
  wind: Math.Nan,
  clouds: Math.Nan,
  rain: Math.Nan,
  snow: Math.Nan
}

const toWeather = (data, tz) => ({
  hours: new Date((data.dt + tz.gmtOffset) * 1000).getHours(),
  temperature: Math.round(data.main.temp),
  wind: data.wind.speed,
  clouds: data.clouds.all,
  rain: data.rain ? data.rain['3h'] : 0,
  snow: data.snow ? data.snow['3h'] : 0,
})
const weather = (state = weatherDefault, action) => {
  switch (action.type) {
    case RECEIVE_CITY_WEATHER:
      const { current, forecast, tz } = action.data
      const currentData = toWeather(current, tz)
      const forecastData = forecast.list.filter(f => f.dt > current.dt).slice(0, FORECASTED_DAYS * FORECASTS_PER_DAY - 1).map(w => ({ ...toWeather(w, tz) }))
      return {
        city: current.name,
        country: current.sys.country,
        ...currentData,
        all: [currentData].concat(forecastData)
      }
    case UPDATE_DAY_OFFSET:
      return {
        ...state,
        ...state.all[action.offset]
      }
    default:
      return state
  }
}

export default weather
