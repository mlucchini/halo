import { connect } from 'react-redux'
import Clouds from '../components/clouds'

const mapStateToProps = (state) => state.weather

export default connect(mapStateToProps)(Clouds)
