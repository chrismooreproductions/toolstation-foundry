const loginRequest = (payloadData, callback) => {
    console.log(payloadData)
    const {hostIp, username, password, database, port, table} = payloadData
    const payload = {
        hostIp: hostIp.value,
        username: username.value,
        password: password.value,
        database: database.value,
        port: port.value,
        table: table.value
    }
    fetch(`/api/db-fields-fetch`, {
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

export default loginRequest