import { current } from '../api/weather'
import { REQUEST_CITY_WEATHER, RECEIVE_CITY_WEATHER, ERROR_CITY_WEATHER } from './types'

export const requestCityWeather = (city) => ({ type: REQUEST_CITY_WEATHER, city })
export const receiveCityWeather = (data) => ({ type: RECEIVE_CITY_WEATHER, data })
export const errorCityWeather = (err) => ({ type: ERROR_CITY_WEATHER, err })

export const fetchCityWeather = (city) => (
  (dispatch) => {
    dispatch(requestCityWeather(city))
    return current(city)
      .then(data => dispatch(receiveCityWeather(data)))
      .catch(err => dispatch(errorCityWeather(err)))
  }
)
