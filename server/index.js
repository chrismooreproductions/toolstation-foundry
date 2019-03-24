const express = require('express');

const app = express()

app.get('/api/submit-survey', (req, res) => {
  console.log('You hit the submit survey endpoint!')
  res.send({ message: 'you hit the submit survey endpoint!' });
})

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
