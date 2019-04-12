const outputRequest = (outputHostData, dataPayload, callback) => {
    const {host, user, password, database, port, table} = outputHostData
    const connectionPayload = {
        host: host.value,
        user: user.value,
        password: password.value,
        database: database.value,
        port: port.value,
        table: table.value
    }
    const payload = {
        connectionPayload: connectionPayload,
        outputHostData: dataPayload
    }
    console.log(JSON.stringify(payload))
    fetch(`/api/db-fields-update`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(responseJson => {
        callback(responseJson)
    })
}

export default outputRequest