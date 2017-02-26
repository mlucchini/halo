import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'
import './Informations.css'

const Informations = ({ city, temperature, input, onChange, onKeyPress }) => (
  <MuiThemeProvider>
    <div className="informations">  
      <TextField
        id={`text-input-${city}`}
        value={input}
        hintText={`${city}`}
        className="text-field-override"
        underlineShow={false}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <div className="temperature">
        { temperature }{ isNaN(temperature) ? '' : '°C' }
      </div>
    </div>
  </MuiThemeProvider>
)

Informations.propTypes = {
  city: React.PropTypes.string,
  temperature: React.PropTypes.number,
  onChange: React.PropTypes.func,
}

export default Informations
