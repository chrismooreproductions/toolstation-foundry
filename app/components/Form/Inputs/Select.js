import * as React from 'react'

const renderTitles = () => {
  const titles = [
    'Mr',
    'Mrs',
    'Dr',
  ]
  return titles.map(title => {
    return (
      <option key={title} value={title}>
        {title}
      </option>
    )
  })
}

const Select = (props) => {
  return (
    <select className={`form-input`} name={props.property} onChange={props.onChange}>
      {renderTitles()}
    </select>
  )
}

export default Select