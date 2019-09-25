import { connect } from 'react-redux'
import Sun from '../components/sun'

const mapStateToProps = (state) => state.weather

export default connect(mapStateToProps)(Sun)
