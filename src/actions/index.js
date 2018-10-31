import { current } from '../api/weather'
import { timezone } from '../api/timezone'
import { REQUEST_CITY_WEATHER, RECEIVE_CITY_WEATHER, ERROR_CITY_WEATHER } from './types'
import { UPDATE_INPUT_CITY, RESET_INPUT_CITY } from './types'

export const requestCityWeather = (city) => ({ type: REQUEST_CITY_WEATHER, city })
export const receiveCityWeather = (data) => ({ type: RECEIVE_CITY_WEATHER, data })
export const errorCityWeather = (err) => ({ type: ERROR_CITY_WEATHER, err })
export const fetchCityWeather = (city) => (
  (dispatch) => {
    dispatch(requestCityWeather(city))
    return current(city).then(city => (
        timezone(city.coord.lat, city.coord.lon).then(tz => dispatch(receiveCityWeather({ city, tz })))
      )).catch(err => dispatch(errorCityWeather(err)))
  }
)

export const updateInputCity = (city) => ({ type: UPDATE_INPUT_CITY, city })
export const resetInputCity = () => ({ type: RESET_INPUT_CITY })
export const fetchInputCityWeather = () => ((dispatch, getState) => dispatch(fetchCityWeather(getState().input.city)))
