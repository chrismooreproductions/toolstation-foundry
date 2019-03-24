const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const opn = require('opn');

const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname +'./../dist'));
}

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
