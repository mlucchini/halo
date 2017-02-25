import React from 'react'
import './Informations.css'

const Informations = ({ city, temperature }) => (
  <div className="informations">
    <div className="city">
      { city }
    </div>
    <div className="temperature">
      { temperature }{ isNaN(temperature) ? '' : '°C' }
    </div>
  </div>
)

Informations.propTypes = {
  city: React.PropTypes.string,
  temperature: React.PropTypes.number,
}

export default Informations
