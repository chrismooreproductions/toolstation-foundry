import * as React from 'react'
import Select from './Inputs/Select'
import LoadingSpinner from './LoadingSpinner'
import LocationFields from './LocationFields'
import Inputs from './Inputs'

const Form = props => {
  const { data, onChange, getCurrentLocation, fetchingLocation } = props
  return Object.keys(data).map((property) => {
    const {label, type, value} = data[property]
    return (
      <div 
        className="form-fields__instance"
        key={`${property}`}
      >
        {type === 'select' ? 
          // if it's a 'select' element just render the select form 
          <Select 
            property={property}
            data={data}
            onChange={onChange}
          />
          : 
          <div>
            {type === 'submit' && fetchingLocation && 
              <LoadingSpinner />
            }
              <Inputs
                property={property}
                type={type}
                value={value}
                label={label}
                onChange={onChange}
                getCurrentLocation={getCurrentLocation}
              />
            {type === 'submit' && value !== '' &&
              <LocationFields 
                value={value}
              />
            }
          </div>
        }
      </div>
    )
  })
}

export default Form
