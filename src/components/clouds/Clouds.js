import React from 'react'
import Isvg from 'react-inlinesvg'
import clouds from './clouds.svg'
import './Clouds.css'

const Clouds = () => (
  <div className="clouds">
    <Isvg src={clouds} uniquifyIDs={false} />
  </div>
)

export default Clouds
