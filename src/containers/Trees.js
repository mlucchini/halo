import { connect } from 'react-redux'
import Trees from '../components/trees'

const mapStateToProps = (state) => state.weather

export default connect(mapStateToProps)(Trees)
