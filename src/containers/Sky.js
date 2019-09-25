import { connect } from 'react-redux'
import Sky from '../components/sky'

const mapStateToProps = (state) => state.weather

export default connect(mapStateToProps)(Sky)
