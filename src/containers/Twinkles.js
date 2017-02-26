import { connect } from 'react-redux'
import Twinkles from '../components/twinkles'

const mapStateToProps = (state) => state.current

export default connect(mapStateToProps)(Twinkles)
