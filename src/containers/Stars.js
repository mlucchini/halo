import { connect } from 'react-redux'
import Stars from '../components/stars'

const mapStateToProps = (state) => state.current

export default connect(mapStateToProps)(Stars)
