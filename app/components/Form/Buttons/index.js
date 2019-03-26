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
      {props.showSubmit && 
        <div
          className="form-button__wrapper"
        >
          <button
              className={`form-button form-button__submit`}
              onClick={props.handleSubmit}
            >
              Submit
          </button>
        </div>
      }
    </div>
  )
}

export default Buttons
