import { connect } from 'react-redux'
import Trees from '../components/trees'

const mapStateToProps = (state) => state.current

export default connect(mapStateToProps)(Trees)
