import { connect } from 'react-redux'
import Landfront from '../components/landfront'

const mapStateToProps = (state) => state.current

export default connect(mapStateToProps)(Landfront)
