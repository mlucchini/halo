import React from 'react'
import Isvg from 'react-inlinesvg'
import skyProject from './sky-project.svg'
import skyReflect from './sky-reflect.svg'
import './Sky.css'

const Sky = ({ hours }) => (
  <div>
    <Isvg src={skyProject} uniquifyIDs={false} className={`hour${hours}`} />
    <Isvg src={skyReflect} uniquifyIDs={false} className={`hour${hours}`} />
  </div>
)

export default Sky
