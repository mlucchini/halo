import React from 'react'
import Isvg from 'react-inlinesvg'
import trees from './trees.svg'
import './Trees.css'

const Trees = ({ hours, wind }) => (
  <span className={wind > 0 && 'wind'}>
    <Isvg src={trees} uniquifyIDs={false} className={`hour${hours}`} />
  </span>
)

Trees.propTypes = {
  hours: React.PropTypes.number,
  wind: React.PropTypes.number
}

export default Trees
