import * as React from 'react';
import PropTypes from 'prop-types';

export default class FormContainer extends React.Component {
  renderFormFields() {
    const { onChange } = this.props
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return Object.keys(this.props.data).map((property, index) => {
      return (
        <div 
          className="form-fields__instance"
          key={`${property}`}
        >
          <label>{capitalizeFirstLetter(property)}</label>
          <input 
            type={this.props.data[property].type}
            name={property}
            className="form-input"
            value={this.props.data[property].value}
            onChange={onChange}
          />
        </div>
      )
    })
  }

  render() {
    const { page, showNext, showPrevious, incrementPage, decrementPage, showSubmit, handleSubmit} = this.props
    return (
      <div className="form">
        <h1>Page {page}</h1>
        <div className="form-fields">
          {this.renderFormFields()}
        </div>
        {(showNext || showPrevious) && 
          <div
            className="form-button__wrapper"
          >
            {showNext && 
              <button
                className={`form-button form-button__show-next`}
                onClick={incrementPage}
              >
                Next
              </button>
            }
            {showPrevious && 
              <button
                className={`form-button form-button__show-next`}
                onClick={decrementPage}
              >
                Previous
              </button>
            }
          </div>
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
