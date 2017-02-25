import { connect } from 'react-redux'
import Informations from '../components/informations'

const mapStateToProps = (state) => state.current

export default connect(mapStateToProps)(Informations)
