const express = require('express');
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/api/submit-survey', (request, response) => {
  console.log(request.body)
  response.send({ message: "you hit the submit survey endpoint!" });
})

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
