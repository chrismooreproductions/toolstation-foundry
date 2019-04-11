import React from 'react'
import PropTypes from 'prop-types';

const TextInput = props => {
    return (
        <div className="form-group">
            <label>{props.title}</label>
            <input 
                type={props.type} 
                name={props.name} 
                value={props.value} 
                onChange={props.onChange} 
                className="form-control"
            />
        </div>
    )
}

TextInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default TextInput