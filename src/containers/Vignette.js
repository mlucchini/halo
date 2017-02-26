import { connect } from 'react-redux'
import Vignette from '../components/vignette'

const mapStateToProps = (state) => state.current

export default connect(mapStateToProps)(Vignette)
