import { connect } from 'react-redux'
import Sky from '../components/sky'

const mapStateToProps = (state) => state.current

export default connect(mapStateToProps)(Sky)
