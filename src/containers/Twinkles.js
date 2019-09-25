import { connect } from 'react-redux'
import Twinkles from '../components/twinkles'

const mapStateToProps = (state) => state.weather

export default connect(mapStateToProps)(Twinkles)
