import { connect } from 'react-redux'
import Informations from '../components/informations'
import { fetchInputCityWeather, updateInputCity, resetInputCity } from '../actions'

const mapStateToProps = (state) => (
  {
    ...state.weather,
    input: state.input.city
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    onChange: (_, city) => {
      dispatch(updateInputCity(city))
    },
    onKeyPress: (event) => {
      if (event.key === 'Enter') {
        dispatch(fetchInputCityWeather())
        dispatch(resetInputCity())
      }
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Informations)
