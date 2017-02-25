import React from 'react'
import Isvg from 'react-inlinesvg'
import skyProject from './sky-project.svg'
import skyReflect from './sky-reflect.svg'
import './Sky.css'

const Sky = () => (
  <div>
    <Isvg src={skyProject} uniquifyIDs={false} />
    <Isvg src={skyReflect} uniquifyIDs={false} />
  </div>
)

export default Sky
