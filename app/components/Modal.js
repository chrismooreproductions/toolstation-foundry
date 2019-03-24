import * as React from 'react'

export default class Modal extends React.Component {
  render() {
    const { displayModal, modalMessage } = this.props
    return (
      <div className={`modal ${displayModal ? 'modal-on' : ''}`}>
      </div>
    )
  }
}