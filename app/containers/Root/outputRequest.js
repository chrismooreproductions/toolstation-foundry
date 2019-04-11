const outputRequest = (payloadData, callback) => {
    const {host, user, password, database, port, table} = payloadData
    const payload = {
        host: host.value,
        user: user.value,
        password: password.value,
        database: database.value,
        port: port.value,
        table: table.value
    }
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