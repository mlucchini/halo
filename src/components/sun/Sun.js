import React from 'react'
import Isvg from 'react-inlinesvg'
import flare from './flare.svg'
import './Sun.css'

const Sun = ({ hours }) => (
  <div className={`hour${hours}`}>
    <div className="sunMask">
      <div className="suncrane">
        <div className="sun">
          <div></div>
        </div>
      </div>
    </div>
    <div className="lighting">
      <div className="suncrane">
        <Isvg src={flare} uniquifyIDs={false} />
      </div>
    </div>
  </div>
)

export default Sun
