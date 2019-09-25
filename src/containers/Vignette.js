import { connect } from 'react-redux'
import Vignette from '../components/vignette'

const mapStateToProps = (state) => state.weather

export default connect(mapStateToProps)(Vignette)
