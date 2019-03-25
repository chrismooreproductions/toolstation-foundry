import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const LoadingSpinner = () => {
  return (
    <span className="form-input__spinner">
      <FontAwesomeIcon
        icon={faSpinner}
        size="2x"
      />
    </span>
  )
}

export default LoadingSpinner