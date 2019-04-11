import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import LoginForm from '../LoginForm'
import DbFields from '../DbFields'
import loginRequest from './loginRequest'

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputFields: {
        host: {name: 'Host IP', type: 'text', value: '10.0.4.16'},
        user: {name: 'Username', type: 'text', value: 'tsbe_rw'},
        password: {name: 'Password', type: 'password', value: 'RifOyHacUg2'},
        database: {name: 'Database', type: 'text', value: 'toolstation_be_laravel'},
        port: {name: 'Port', type: 'text', value: '3320'},
        table: {name: 'Table', type: 'text', value: 'epos_config'}
      },
      dbFields: {},
      outputFields: {
        host: {name: 'Host IP', type: 'text', value: '10.0.4.16'},
        user: {name: 'Username', type: 'text', value: 'tsbe_rw'},
        password: {name: 'Password', type: 'password', value: 'RifOyHacUg2'},
        database: {name: 'Database', type: 'text', value: 'toolstation_be'},
        port: {name: 'Port', type: 'text', value: '3320'},
        table: {name: 'Table', type: 'text', value: 'epos_config'}
      }
    }
    this.onChange = this.onChange.bind(this)
    this.onChangeOutputs = this.onChangeOutputs.bind(this)
    this.renderDbFields = this.renderDbFields.bind(this)
    this.submitLoginForm = this.submitLoginForm.bind(this)
    this.setDbFieldsState = this.setDbFieldsState.bind(this)
  }

  submitLoginForm(e) {
    e.preventDefault()
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
    this.setState({
      dbFields: responseJson.data
    })
  }

  submitOutputs(e) {
    e.preventDefault()
  }

  onChangeOutputs(e) {
    const updatedOutputFields = Object.assign({}, this.state.outputFields)
    updatedOutputFields[e.target.name].value = e.target.value
    this.setState({
      outputFields: updatedOutputFields
    })
  }

  renderDbFields() {
    if (Object.entries(this.state.dbFields).length === 0 && this.state.dbFields.constructor === Object) {
      return (
        <div>
          <h1>No database loaded yet.</h1>
        </div>
      )
    } else {
      return (
        <div className="container-fluid">
          <h1>Database Field Names</h1>
          <DbFields 
            fields={this.state.dbFields}
          />
          <LoginForm
            submitLoginForm={this.submitOutputs}
            inputFields={this.state.outputFields}
            onChange={this.onChangeOutputs}
          />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className="container-fluid">
          <LoginForm
            submitLoginForm = {this.submitLoginForm}
            inputFields = {this.state.inputFields}
            onChange = {this.onChange}
          />
        </div>
        {this.renderDbFields()}
      </div>
    )
  }
}

export default hot(Root)
// TODO: prop validation here...