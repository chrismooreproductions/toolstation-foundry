const request = (payloadData, setResponseState) => {
  const {title, name, dob, location, dateTime} = payloadData
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
    setResponseState()
  })
  .catch(error => {
    this.setState({
      displayModal: true,
      modalMessage: 'Could not post feedback, try again later',
      modalStatus: 'failure'
    })
  })
}

export default request