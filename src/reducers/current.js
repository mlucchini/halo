import { RECEIVE_CITY_WEATHER } from '../actions/types'

const currentDefault = {
  city: '',
  country: '',
  hours: Math.NaN,
  temperature: Math.Nan,
  wind: Math.Nan,
  clouds: Math.Nan,
  rain: Math.Nan,
  snow: Math.Nan
}

const current = (state = currentDefault, action) => {
  switch (action.type) {
    case RECEIVE_CITY_WEATHER:
      const { city, tz } = action.data
      return {
        city: city.name,
        country: city.sys.country,
        hours: new Date((city.dt + tz.gmtOffset) * 1000).getHours(),
        temperature: Math.round(city.main.temp),
        wind: city.wind.speed,
        clouds: city.clouds.all,
        rain: city.rain ? city.rain['3h'] : 0,
        snow: city.snow ? city.snow['3h'] : 0
      }
    default:
      return state
  }
}

export default current
