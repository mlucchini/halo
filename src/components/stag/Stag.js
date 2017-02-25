import React from 'react'
import Isvg from 'react-inlinesvg'
import stag1 from './stag1.svg'
import stag2 from './stag2.svg'
import stag3 from './stag3.svg'
import './Stag.css'

const Stag = () => (
  <div id="stag">
    <Isvg src={stag1} uniquifyIDs={false} />
    <Isvg src={stag2} uniquifyIDs={false} />
    <Isvg src={stag3} uniquifyIDs={false} />
  </div>
)

export default Stag
