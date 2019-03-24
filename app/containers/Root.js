import * as React from 'react'
import FormPage from './FormPage'
import Modal from '../components/Modal'

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      payloadData: {
        title: 'Mr',
        name: 'Chris Moore',
        dob: '13/11/1985',
        location: 'here',
        dateTime: '16:01 24/03/2019'
      },
      displayModal: false,
      modalMessage: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.incrementPage = this.incrementPage.bind(this)
    this.decrementPage = this.decrementPage.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submitting...')
    fetch(`/api/submit-survey`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(this.state.payloadData)
    }) 
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson.message)
      this.setState({
        displayModal: true,
        modalMessage: 'Thank you for your feedback'
      })
    })
    .catch(error => {
      this.setState({
        displayModal: true,
        modalMessage: 'Could not post feedback, try again later'
      })
    })
  }

  decrementPage() {
    const { page } = this.state
    this.setState({ page: page - 1 })
  }
  incrementPage() {
    const { page } = this.state
    this.setState({ page: page + 1 })
  }

  showForm() {
    const { page } = this.state
    switch(page) {
      case(1):
        return (
          <FormPage 
            page={page}
            showNext
            incrementPage={this.incrementPage}
          />
        )
      case(2):
        return (
          <FormPage 
            page={page}
            showPrevious
            decrementPage={this.decrementPage}
            showSubmit
            handleSubmit={this.handleSubmit}
          />
        )
      default: 
        return
    }
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className="form-wrapper">
          <h1>Customer Feedback</h1>
          {this.showForm()}
        </div>
        <Modal 
          displayModal={this.state.displayModal}
          modalMessage={this.state.modalMessage}
        />
      </div>
    )
  }
}