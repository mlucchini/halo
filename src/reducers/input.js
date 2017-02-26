import { UPDATE_INPUT_CITY, RESET_INPUT_CITY } from '../actions/types'

const inputDefault = {
  city: ''
}

const input = (state = inputDefault, action) => {
  switch (action.type) {
    case UPDATE_INPUT_CITY:
      return {
        city: action.city
      }
    case RESET_INPUT_CITY:
      return {
        city: ''
      }
    default:
      return state
  }
}

export default input
