import * as React from 'react'
import NextButton from './NextButton'
import PreviousButton from './PreviousButton';

const Buttons = props => {
  return (
    <div
      className="form-button__wrapper"
    >
      {props.showNext && 
        <NextButton 
          incrementPage={props.incrementPage}
        />
      }
      {props.showPrevious && 
        <PreviousButton
          decrementPage={props.decrementPage}
        />
      }
    </div>
  )
}

export default Buttons
