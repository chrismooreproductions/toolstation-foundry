import * as React from 'react'
import LoginForm from '../LoginForm'
import loginRequest from './loginRequest'

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputFields: {
        hostIp: {name: 'Host IP', type: 'text', value: ''},
        username: {name: 'Username', type: 'text', value: ''},
        password: {name: 'Password', type: 'password', value: ''},
        database: {name: 'Database', type: 'text', value: ''},
        port: {name: 'Port', type: 'text', value: ''},
        table: {name: 'Table', type: 'text', value: ''}
      },
      dbFields: {}
    }
    this.onChange = this.onChange.bind(this)
    this.renderDbFields = this.renderDbFields.bind(this)
    this.submitLoginForm = this.submitLoginForm.bind(this)
    this.setDbFieldsState = this.setDbFieldsState.bind(this)
  }

  submitLoginForm(e) {
    e.preventDefault()
    console.log('form submitted!')
    loginRequest(this.state.inputFields, this.setDbFieldsState)
  }

  onChange(e) {
    const updatedInputFields = Object.assign({}, this.state.inputFields)
    updatedInputFields[e.target.name].value = e.target.value
    this.setState({
      inputFields: updatedInputFields
    })
  }

  setDbFieldsState(responseJson) {
    console.log('setting fields in state!')
    console.log(responseJson)
  }

  renderDbFields() {
    if (Object.entries(this.state.dbFields).length === 0 && this.state.dbFields.constructor === Object) {
      return (
        <div>
          <h1>There's no database loaded</h1>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Here are the db fields:</h1>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="app-wrapper">
        <LoginForm
          submitLoginForm = {this.submitLoginForm}
          inputFields = {this.state.inputFields}
          onChange = {this.onChange}
        />
        {this.renderDbFields()}
      </div>
    )
  }
}

// TODO: prop validation here...