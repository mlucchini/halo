import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Slider from 'material-ui/Slider'
import './Menu.css'

const Menu = ({ onChange }) => (
  <MuiThemeProvider muiTheme={getMuiTheme({
      slider: { trackColor: 'white', selectionColor: 'white' },
    })}>
    <div className="menu">
      <Slider step={1} defaultValue={0} min={0} max={15} className="slider" onChange={onChange} />
    </div>
  </MuiThemeProvider>
)

Menu.propTypes = {
  onChange: React.PropTypes.func,
}

export default Menu
