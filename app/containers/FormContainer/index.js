import * as React from 'react';
import PropTypes from 'prop-types';
import Form from '../../components/form'
import Buttons from '../../components/Form/Buttons';

export default class FormContainer extends React.Component {
  render() {
    const { page, showNext, showPrevious, incrementPage, decrementPage, showSubmit, handleSubmit} = this.props
    return (
      <div className="form">
        <h1>Page {page}</h1>
        <div className="form-fields">
          <Form 
            data={this.props.data}
            onChange={this.props.onChange}
            getCurrentLocation={this.props.getCurrentLocation}
            fetchingLocation={this.props.fetchingLocation}
          />
        </div>
        {(showNext || showPrevious) && 
          <Buttons
            showNext={showNext}
            incrementPage={incrementPage}
            showPrevious={showPrevious}
            decrementPage={decrementPage}
          />
        }
        {showSubmit &&
          <div
            className="form-button__wrapper"
          >
            <button
                className={`form-button form-button__submit`}
                onClick={handleSubmit}
              >
                Submit
            </button>
          </div>
        }
      </div>
    )
  }
}

FormContainer.propTypes = {
  data: PropTypes.shape({}).isRequired,
  page: PropTypes.number.isRequired,
  incrementPage: PropTypes.func,
  decrementPage: PropTypes.func,
  showNext: PropTypes.bool,
  showPrevious: PropTypes.bool,
  showSubmit: PropTypes.bool,
  handleSubmit: PropTypes.func
}
