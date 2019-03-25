import * as React from 'react'
import FormContainer from '../FormContainer'
import Modal from '../../components/Modal'
import moment from 'moment';

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      payloadData: {
        title: {
          type: 'select',
          value: 'Mr',
          label: 'Title'
        },
        name: {
          type: 'input',
          value: '',
          label: 'Name'
        },
        dob: {
          type: 'date',
          value: '',
          label: 'Date of Birth'
        },
        location: {
          type: 'submit',
          value: '',
          label: 'Location'
        },
        dateTime: {
          type: 'input',
          value: moment().format('MMMM Do YYYY, h:mm'),
          label: 'Today\'s date'
        }
      },
      displayModal: false,
      modalMessage: '',
      modalStatus: '',
      fetchingLocation: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.incrementPage = this.incrementPage.bind(this)
    this.decrementPage = this.decrementPage.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.onChange = this.onChange.bind(this)
    this.getCurrentLocation = this.getCurrentLocation.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const {title, name, dob, location, dateTime} = this.state.payloadData
    const payload = {
      title: title.value,
      name: name.value,
      dob: dob.value,
      location: location.value,
      dateTime: dateTime.value
    }
    fetch(`/api/submit-survey`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(payload)
    }) 
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        displayModal: true,
        modalMessage: 'Thank you for your feedback',
        modalStatus: 'success'
      })
    })
    .catch(error => {
      this.setState({
        displayModal: true,
        modalMessage: 'Could not post feedback, try again later',
        modalStatus: 'failure'
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

  renderForm() {
    const { page, payloadData } = this.state
    let data = {}
    switch(page) {
      case(1):
        data = {
          title: payloadData.title,
          name: payloadData.name,
          dob: payloadData.dob
        }
        return (
          <FormContainer
            page={page}
            showNext
            incrementPage={this.incrementPage}
            data={data}
            onChange={this.onChange}
          />
        )
      case(2):
        data = {
          location: payloadData.location,
          dateTime: payloadData.dateTime,
        }
        return (
          <FormContainer
            page={page}
            showPrevious
            decrementPage={this.decrementPage}
            showSubmit
            handleSubmit={this.handleSubmit}
            onChange={this.onChange}
            getCurrentLocation={this.getCurrentLocation}
            fetchingLocation={this.state.fetchingLocation}
            location={this.state.location}
            data={data}
          />
        )
      default: 
        return
    }
  }

  onChange(event) {
    const prop = Object.assign({}, this.state.payloadData)
    prop[event.target.name].value = event.target.value
    this.setState({
      payloadData: prop
    })
  }

  async getCurrentLocation() {
    try {
      this.setState({fetchingLocation: true})
      if (navigator.geolocation) {
        await navigator.geolocation.getCurrentPosition(position => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          const prop = Object.assign({}, this.state.payloadData)
          prop.location.value = pos
          return this.setState({
            payloadData: prop,
            fetchingLocation: false
          })
        })
      }
    } 
    catch(err) {
      console.log('Unable to fetch location...')
      this.setState({
        fetchingLocation: false,
        displayModal: false,
        modalMessage: 'Unable to fetch location...',
        modalStatus: '',
      })
    }
  }

  hideModal() {
    this.setState({
      displayModal: false,
      page: 1
    })
  }

  render() {
    const { displayModal, modalMessage, modalStatus, page } = this.state
    return (
      <div className="app-wrapper">
        <div className="form-wrapper">
          <h1>Customer Feedback</h1>
          {this.renderForm(page)}
        </div>
        <Modal
          hideModal={this.hideModal}
          displayModal={displayModal}
          modalMessage={modalMessage}
          modalStatus={modalStatus}
        />
      </div>
    )
  }
}

// TODO: prop validation here...