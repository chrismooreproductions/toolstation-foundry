import React from 'react'
import PropTypes from 'prop-types'
import DbFieldsComponent from '../../components/DbFieldsComponent'

const DbFields = props => {
    console.log(props)
    return (
        Object.keys(props.fields).map(field => <DbFieldsComponent field={props.fields[field]} />)
    )
}

export default DbFields