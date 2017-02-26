import { combineReducers } from 'redux'
import current from './current'
import input from './input'

const weather = combineReducers({
  current,
  input
})

export default weather
