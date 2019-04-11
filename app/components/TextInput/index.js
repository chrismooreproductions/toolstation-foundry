import React from 'react'
import PropTypes from 'prop-types';

const TextInput = props => {
    return (
        <div>
            <label>
                {props.title}
                <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} />
            </label>
        </div>
    )
}

TextInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default TextInput