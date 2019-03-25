import * as React from 'react'
import moment from 'moment'

const Inputs = props => {
  const { property, type, value, label, onChange, getCurrentLocation } = props
  return (
    <input 
      type={type}
      required
      name={property}
      className={property !== 'location' ? "form-input" : "form-input form-input__with-spinner"}
      value={type === 'submit' ? 'Fetch Location' : property === 'dateTime' ? moment(value, 'YYYYMMDhmm').format('MMMM Do YYYY, h:mm') : value}
      disabled={property === 'dateTime' ? true : false}
      placeholder={label}
      onChange={onChange}
      onClick={type === 'submit' ? getCurrentLocation : () => {}}
    />
  )
}

export default Inputs