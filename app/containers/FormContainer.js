import * as React from 'react';
import PropTypes from 'prop-types';

export default class FormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data
    } 
  }

  componentDidMount() {
    this.setState({data: this.props.data})
  }

  renderFormFields(data) {
    return data.map((property, index) => {
      return (
        <input 
          key={index}
          type={property.type}
          className="form-input"
          value={property.value}
        />
      )
    })
  }

  render() {
    const { page, showNext, showPrevious, incrementPage, decrementPage, showSubmit, handleSubmit} = this.props
    return (
      <div className="form">
        <h1>Page {page}</h1>
        {this.renderFormFields(this.state.data)}
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
  data: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  incrementPage: PropTypes.func,
  decrementPage: PropTypes.func,
  showNext: PropTypes.bool,
  showPrevious: PropTypes.bool,
  showSubmit: PropTypes.bool,
  handleSubmit: PropTypes.func
}
