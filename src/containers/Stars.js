import { connect } from 'react-redux'
import Stars from '../components/stars'

const mapStateToProps = (state) => state.weather

export default connect(mapStateToProps)(Stars)
