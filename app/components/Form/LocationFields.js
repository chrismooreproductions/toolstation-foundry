import * as React from 'react'

const LocationFields = props => {
  const { value } = props
  return (
    <div className="form-fields__location-wrapper">
      <div>Your location is...</div>
      <div>latitude: {value.lat}</div>
      <div>longitude: {value.lng}</div> 
    </div>
  )
}

export default LocationFields
