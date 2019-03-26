import * as React from 'react';
import PropTypes from 'prop-types';
import Form from '../../components/Form'
import Buttons from '../../components/Form/Buttons';

const FormContainer = props => {
  const { 
    data,
    onChange,
    getCurrentLocation,
    fetchingLocation,
    page, 
    showNext, 
    showPrevious, 
    incrementPage, 
    decrementPage, 
    showSubmit, 
    handleSubmit
  } = props

  return (
    <div className="form">
      <h1>Page {page}</h1>
      <div className="form-fields">
        <Form 
          data={data}
          onChange={onChange}
          getCurrentLocation={getCurrentLocation}
          fetchingLocation={fetchingLocation}
        />
      </div>
      <Buttons
        showNext={showNext}
        incrementPage={incrementPage}
        showPrevious={showPrevious}
        decrementPage={decrementPage}
        showSubmit={showSubmit}
        handleSubmit={handleSubmit}
      />
    </div>
  )
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

export default FormContainer
