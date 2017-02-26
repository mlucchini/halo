import { connect } from 'react-redux'
import Sun from '../components/sun'

const mapStateToProps = (state) => state.current

export default connect(mapStateToProps)(Sun)
