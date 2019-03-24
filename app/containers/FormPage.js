import * as React from 'react';
import PropTypes from 'prop-types';

const FormPage = (props) => {
  const { page } = props
  return (
    <div className="form">
      <h1>Page {page}</h1>
      {(props.showNext || props.showPrevious) && 
        <div
          className="form-button__wrapper"
        >
          {props.showNext && 
            <button
              className={`form-button form-button__show-next`}
              onClick={props.incrementPage}
            >
              Next
            </button>
          }
          {props.showPrevious && 
            <button
              className={`form-button form-button__show-next`}
              onClick={props.decrementPage}
            >
              Previous
            </button>
          }
        </div>
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

FormPage.propTypes = {
  page: PropTypes.number.isRequired,
  incrementPage: PropTypes.func,
  decrementPage: PropTypes.func,
  showNext: PropTypes.bool,
  showPrevious: PropTypes.bool,
  showSubmit: PropTypes.bool,
  handleSubmit: PropTypes.func
}

export default FormPage
