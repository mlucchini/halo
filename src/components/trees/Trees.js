import React from 'react'
import Isvg from 'react-inlinesvg'
import trees from './trees.svg'
import './Trees.css'

const Trees = ({ hours }) => (
  <Isvg src={trees} uniquifyIDs={false} className={`hour${hours}`} />
)

Trees.propTypes = {
  hours: React.PropTypes.number
}

export default Trees
