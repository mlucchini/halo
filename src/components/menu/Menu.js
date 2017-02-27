import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Slider from 'material-ui/Slider'
import './Menu.css'

const Menu = () => (
  <MuiThemeProvider muiTheme={getMuiTheme({
      slider: { trackColor: 'white', selectionColor: 'white' },
    })}>
    <div className="menu">
      <Slider step={1} defaultValue={0} min={0} max={5} className="slider"/>
    </div>
  </MuiThemeProvider>
)

Menu.propTypes = {

}

export default Menu
