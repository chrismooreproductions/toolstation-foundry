const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql')
const app = express()
const opn = require('opn');

const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname +'./../dist'));
}

app.post('/api/db-fields-fetch', (request, response) => {
  console.log(request.body)
  const connection = mysql.createConnection({
    host: request.body.host,
    user: request.body.user,
    password: request.body.password,
    database: request.body.database,
    port: request.body.port
  })
  connection.connect()
  const queryString = "SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME=N'" + request.body.table + "'"
  console.log(queryString)
  connection.query(queryString, function (err, rows, fields) {
    if (err) throw err
  
    console.log('Here\'s your data: ', rows)
    response.send({data: rows})
  })
  connection.end()
})

app.post('/api/db-fields-update', (request, response) => {
  console.log(request)
  const {host, user, password, database, port} = request.body.connectionPayload
  const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: port
  })
  connection.connect()
  // Need to finish generating the SQL queries here...
  const queryString = "SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME=N'" + request.body.table + "'"
  console.log(queryString)
  connection.query(queryString, function (err, rows, fields) {
    if (err) throw err
  
    console.log('Here\'s your data: ', rows)
    response.send({data: rows})
  })
  connection.end()
})

app.post('/api/submit-survey', (request, response) => {
  console.log(request.body)
  response.send({ message: "you hit the submit survey endpoint!" });
})

app.listen(port, () =>
  console.log(`Express server is running on localhost:${port}`)
);

if (process.env.NODE_ENV === "production") {
  opn(`http://localhost:${port}`);
}
