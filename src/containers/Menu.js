import { connect } from 'react-redux'
import Menu from '../components/menu'

const mapStateToProps = (state) => state.current

export default connect(mapStateToProps)(Menu)
