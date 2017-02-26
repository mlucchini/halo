import React from 'react'
import Isvg from 'react-inlinesvg'
import landscape from './landscape.svg'
import './Landscape.css'

const Landscape = ({ hours }) => (
  <Isvg src={landscape} uniquifyIDs={false} className={`hour${hours}`} />
)

Landscape.propTypes = {
  hours: React.PropTypes.number
}

export default Landscape
