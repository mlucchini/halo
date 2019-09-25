import { connect } from 'react-redux'
import Menu from '../components/menu'
import { updateDayOffset } from '../actions'

const mapStateToProps = (state) => (
  {
    ...state.weather,
    input: state.input.city
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    onChange: (_, offset) => dispatch(updateDayOffset(offset))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
