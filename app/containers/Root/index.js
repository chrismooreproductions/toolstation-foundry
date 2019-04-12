import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import LoginForm from '../LoginForm'
import DbFields from '../DbFields'
import loginRequest from './loginRequest'
import outputRequest from './outputRequest'
const clonedeep = require('lodash.clonedeep')

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputFields: {
        host: {name: 'Host IP', type: 'text', value: '10.0.4.16'},
        user: {name: 'Username', type: 'text', value: 'tsbe_rw'},
        password: {name: 'Password', type: 'password', value: 'RifOyHacUg2'},
        database: {name: 'Database', type: 'text', value: 'toolstation_be'},
        port: {name: 'Port', type: 'text', value: '3320'},
        table: {name: 'Table', type: 'text', value: 'stock_parts'}
      },
      dbFields: {},
      outputFields: {
        host: {name: 'Host IP', type: 'text', value: '127.0.0.1'},
        user: {name: 'Username', type: 'text', value: 'root'},
        password: {name: 'Password', type: 'password', value: 'password'},
        database: {name: 'Database', type: 'text', value: 'toolstation'},
        port: {name: 'Port', type: 'text', value: '3306'},
        table: {name: 'Table', type: 'text', value: 'stock_parts'}
      }
    }
    this.onChange = this.onChange.bind(this)
    this.onChangeOutputs = this.onChangeOutputs.bind(this)
    this.renderDbFields = this.renderDbFields.bind(this)
    this.submitLoginForm = this.submitLoginForm.bind(this)
    this.setDbFieldsState = this.setDbFieldsState.bind(this)
    this.onChangeDbFieldName = this.onChangeDbFieldName.bind(this)
    this.migrateComplete = this.migrateComplete.bind(this)
    this.submitOutputForm = this.submitOutputForm.bind(this)
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
    responseJson.data.map(dataPoint => {
      return (
        // Might want to put a bunch of properties here 
        // or do some initial setting of state on to the
        // revised database schema details.
        dataPoint.OUTPUT_FIELD_NAME = dataPoint.COLUMN_NAME
      )
    })
    this.setState({
      dbFields: responseJson.data
    })
  }

  submitOutputForm(e) {
    e.preventDefault()
    outputRequest(this.state.outputFields, this.state.dbFields, this.migrateComplete)
  }

  migrateComplete() {
    console.log('Migration Complete!')
  }

  onChangeDbFieldName(e) {
    const updatedDbFields = clonedeep(this.state.dbFields)
    const fieldIndex = (fields, e) => {
      for (var i = 0; i < fields.length; i++) {
        if (updatedDbFields[i].COLUMN_NAME === e.target.name) {
          return i
        }
      }
    }
    const updatedDbFieldIndex = fieldIndex(updatedDbFields, e)
    updatedDbFields[updatedDbFieldIndex].OUTPUT_FIELD_NAME = e.target.value
    this.setState({dbFields: updatedDbFields})
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
        <div className="row">
          <div className="col-7">
            <h1>Database Field Names</h1>
            <DbFields 
              fields={this.state.dbFields}
              onChangeDbFieldName={this.onChangeDbFieldName}
            />
          </div>
          <div className="col-5">
            <h1>Output Database Credentials</h1>
            <LoginForm
              submitLoginForm={this.submitOutputForm}
              inputFields={this.state.outputFields}
              onChange={this.onChangeOutputs}
            />
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <h1>Input Database Credentials</h1>
              <LoginForm
                submitLoginForm = {this.submitLoginForm}
                inputFields = {this.state.inputFields}
                onChange = {this.onChange}
              />
            </div>
            <div className="col-9">
              {this.renderDbFields()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default hot(Root)
// TODO: prop validation here...