import React from 'react'
import PropTypes from 'prop-types';
import TextInput from '../../components/TextInput'

export default class LoginForm extends React.Component {
    renderForm() {
        return (
            Object.keys(this.props.inputFields).map(field => {
                const {name, type, value} = this.props.inputFields[field]
                return(
                    <TextInput
                        onChange={this.props.onChange}
                        type={type}
                        key={name}
                        name={field}
                        title={name}
                        value={value}
                    />
                )
            })
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.submitLoginForm}>
                    {this.renderForm()}
                    <input type='submit' value='Submit' className='btn btn-primary'/>
                </form>
            </div>
        )
    }
}

LoginForm.propTypes = {
    inputFields: PropTypes.shape({}).isRequired,
    submitLoginForm: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}