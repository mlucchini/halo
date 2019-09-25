import { combineReducers } from 'redux'
import weather from './weather'
import input from './input'

const reducers = combineReducers({
  weather,
  input
})

export default reducers
