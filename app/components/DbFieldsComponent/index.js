import React from 'react'
import PropTypes from 'prop-types'

const DbFieldsComponent = props => {
    console.log(props)
    return (
        <div className="row">
            <div className="col-6">
                <div className="form-group">
                    <label>Current Field Name</label>
                    <input 
                        key={props.field.COLUMN_NAME} 
                        value={props.field.COLUMN_NAME} 
                        className="form-control"
                        disabled
                    />
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <label>New Field Name</label>
                    <input
                        key={props.field.COLUMN_NAME} 
                        className="form-control"
                    />
                </div>
            </div>
        </div>
    )
}

export default DbFieldsComponent