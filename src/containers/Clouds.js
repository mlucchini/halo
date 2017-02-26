import { connect } from 'react-redux'
import Clouds from '../components/clouds'

const mapStateToProps = (state) => state.current

export default connect(mapStateToProps)(Clouds)
