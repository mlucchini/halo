import React from 'react'
import Isvg from 'react-inlinesvg'
import twinkle1 from './twinkle1.svg'
import twinkle2 from './twinkle2.svg'
import twinkle3 from './twinkle3.svg'
import './Twinkles.css'

const Twinkles = ({ hours }) => (
  <div className={`twinkleWrap hour${hours}`}>
    <div className="twinkles">
      <Isvg src={twinkle1} uniquifyIDs={false} />
      <Isvg src={twinkle2} uniquifyIDs={false} />
      <Isvg src={twinkle3} uniquifyIDs={false} />
    </div>
  </div>
)

export default Twinkles
