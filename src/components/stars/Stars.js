import React from 'react'
import Isvg from 'react-inlinesvg'
import starProject from './star-project.svg'
import starReflect from './star-reflect.svg'
import './Stars.css'

const Stars = ({ hours }) => (
  <div className={`stars hour${hours}`}>
    <div id="stars" className="starWrap starProject">
      <Isvg src={starProject} uniquifyIDs={false} />
    </div>
  	<div id="starReflection" className="starWrap starReflect">
      <Isvg src={starReflect} uniquifyIDs={false} />
    </div>
  </div>
)

export default Stars
