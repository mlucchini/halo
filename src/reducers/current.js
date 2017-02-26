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
      const r = action.data
      return {
        city: r.name,
        country: r.sys.country,
        hours: new Date(r.dt * 1000).getHours(),
        temperature: Math.round(r.main.temp),
        wind: r.wind.speed,
        clouds: r.clouds.all,
        rain: r.rain ? r.rain['3h'] : 0,
        snow: r.snow ? r.snow['3h'] : 0
      }
    default:
      return state
  }
}

export default current
