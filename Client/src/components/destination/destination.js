import React from 'react'
import './destination.css'
import DestinationList from '../destinationCard/DestinationList'
function Destination() {
  return (
    <div className="Destination">
      <h3>ALL DESTINATIONS</h3>
      <DestinationList></DestinationList>
    </div>

  )
}
export default Destination;