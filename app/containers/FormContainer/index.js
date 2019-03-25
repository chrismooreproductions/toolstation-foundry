import * as React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default class FormContainer extends React.Component {
  renderTitles() {
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

  renderInputFields() {
    const { onChange, getCurrentLocation, fetchingLocation } = this.props
    return Object.keys(this.props.data).map((property, index) => {
      const {label, type, value} = this.props.data[property]
      return (
        <div 
        className="form-fields__instance"
        key={`${property}`}
        >
          {type === 'select' ? 
            <select className={`form-input`} name={property} onChange={onChange}>
              {this.renderTitles()}
            </select>
          : 
            <div>
              {type === 'submit' && fetchingLocation && 
                <span className="form-input__spinner">
                  <FontAwesomeIcon
                    icon={faSpinner}
                    size="2x"
                  />
                </span>
              }
              <input 
                type={type}
                required
                name={property}
                className={property !== 'location' ? "form-input" : "form-input form-input__with-spinner"}
                value={type === 'submit' ? 'Fetch Location' : value}
                disabled={property === 'dateTime' ? true : false}
                placeholder={label}
                onChange={onChange}
                onClick={type === 'submit' ? getCurrentLocation : () => {}}
              />
              {type === 'submit' && value !== '' &&
                <div className="form-fields__location-wrapper">
                  <div>Your location is...</div>
                  <div>latitude: {value.lat}</div>
                  <div>longitude: {value.lng}</div> 
                </div>
              }
            </div>
          }
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
          {this.renderInputFields()}
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
