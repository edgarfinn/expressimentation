const express = require('express');
const app = express();

const port = process.env.PORT || 9090;

app.get('/', function(req,res) {
    res.send('Sup foolio?');
})

app.get('/users/:userId/books/:bookId', function (req, res) {
  console.log('req.params', req.params)
})

app.listen(port, function() {
  console.log('Server listening on port: ', port);
})
