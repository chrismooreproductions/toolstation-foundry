import React from 'react'
import PropTypes from 'prop-types'
import DbFieldsComponent from '../../components/DbFieldsComponent'

const DbFields = props => {
    return (
        Object.keys(props.fields).map(field => {
            return (
                <DbFieldsComponent
                    key={props.fields[field].COLUMN_NAME}
                    field={props.fields[field]} 
                    onChangeDbFieldName={props.onChangeDbFieldName} 
                />
            )
        })
    )
}

export default DbFields