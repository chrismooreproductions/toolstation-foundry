import * as React from 'react'

const NextButton = props => {
  return (
    <button
      className={`form-button form-button__show-next`}
      onClick={props.incrementPage}
    >
      Next
    </button>
  )
}

export default NextButton