import React from 'react'
import Isvg from 'react-inlinesvg'
import cloud from './cloud.svg'
import './Clouds.css'

const hourToOpacity = (hours) => Math.max(0.2, 1 - Math.abs(12 - hours) / 10)

const Clouds = ({ clouds, hours }) => (
  isNaN(clouds) ? null :
  <div className="clouds" style={{ opacity: hourToOpacity(hours) }}>
  {
    Array(parseInt(clouds / 10, 10)).fill().map((_, i) =>
      <div key={`cloud${i}`} className={`cloud${i}`}>
        <Isvg src={cloud} uniquifyIDs={false} />
      </div>
    )
  }
  </div>
)

Clouds.propTypes = {
  clouds: React.PropTypes.number,
  hours: React.PropTypes.number
}

export default Clouds
