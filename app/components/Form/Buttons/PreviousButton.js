import * as React from 'react'

const PreviousButton = props => {
  return (
    <button
      className={`form-button form-button__show-next`}
      onClick={props.decrementPage}
    >
      Previous
    </button>
  )
}

export default PreviousButton