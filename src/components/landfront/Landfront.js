import React from 'react'
import './Landfront.css'

const Landfront = ({ hours }) => (
  <section id="landfront" className={`hour${hours}`}></section>
)

Landfront.propTypes = {
  hours: React.PropTypes.number
}

export default Landfront
