const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3400;
// changed port 
const controller = require('./controller.js');
// const Song = require('../db/seed.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/song', (req, res) => {
// console.log(res.body);
controller.getRelatedSongs(res.body, (err, response) => {
  if (err) {
    res.send(err);
  }
  // console.log(res.json(data))
  res.send(response);
});
});

// Create / POST - create a new item
app.post('/song', function (req, res) {
  res.send('Got a POST request')
})
// Read / GET - read an item
app.get('/song/:id', function (req, res) {
  res.send('Hello World!')
})
// Update / PUT - update an item
app.put('/song', function (req, res) {
  res.send('Got a PUT request at /user')
})
// Delete / DELETE - delete an item
app.delete('/song/:id/', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => console.log(`DO YOU COME IN @ ${port}`));
