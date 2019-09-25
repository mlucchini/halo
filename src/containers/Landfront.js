import { connect } from 'react-redux'
import Landfront from '../components/landfront'

const mapStateToProps = (state) => state.weather

export default connect(mapStateToProps)(Landfront)
