import * as React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const renderIcon = (status) => {
  switch(status) {
    case('success'):
      return (
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`${status === 'success' ? 'modal-icon__success' : 'modal-icon__failure'}`}
          size="2x"
        />
      )
  }
}

const Modal = props => {
  const { displayModal, modalMessage, modalStatus, hideModal } = props
  return (
    <div className={`modal${displayModal ? ' modal-on' : ' modal-off'}`} onClick={hideModal}>
      <h2>
        {modalMessage}
      </h2>
      <div>
        {renderIcon(modalStatus, hideModal)}
      </div>
    </div>
  )
}

Modal.propTypes = {
  displayModal: PropTypes.bool,
  modalMessage: PropTypes.string,
  modalStatus: PropTypes.string,
  hideModal: PropTypes.bool
}

export default Modal
