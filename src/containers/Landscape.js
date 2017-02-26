import { connect } from 'react-redux'
import Landscape from '../components/landscape'

const mapStateToProps = (state) => state.current

export default connect(mapStateToProps)(Landscape)
