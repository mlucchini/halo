import { current as currentWeather, forecast as forecastWeather } from '../api/weather'
import { timezone } from '../api/timezone'
import { REQUEST_CITY_WEATHER, RECEIVE_CITY_WEATHER, ERROR_CITY_WEATHER, UPDATE_INPUT_CITY,
  RESET_INPUT_CITY, UPDATE_DAY_OFFSET } from './types'

export const requestCityWeather = (cityName) => ({ type: REQUEST_CITY_WEATHER, cityName })
export const receiveCityWeather = (data) => ({ type: RECEIVE_CITY_WEATHER, data })
export const errorCityWeather = (err) => ({ type: ERROR_CITY_WEATHER, err })
export const fetchCityWeather = (cityName) => (
  async (dispatch) => {
    dispatch(requestCityWeather(cityName))
    try {
      const current = await currentWeather(cityName)
      const forecast = await forecastWeather(cityName)
      const tz = await timezone(current.coord.lat, current.coord.lon)
      dispatch(receiveCityWeather({ current, forecast, tz }))
    } catch (err) {
      dispatch(errorCityWeather(err))
    }
  }
)

export const updateInputCity = (city) => ({ type: UPDATE_INPUT_CITY, city })
export const resetInputCity = () => ({ type: RESET_INPUT_CITY })
export const fetchInputCityWeather = () => ((dispatch, getState) => dispatch(fetchCityWeather(getState().input.city)))

export const updateDayOffset = (offset) => ({ type: UPDATE_DAY_OFFSET, offset })
