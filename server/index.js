const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3400;
// changed port 
const db = require('../db/index.js');
const Song = require('../db/seed.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/mainSong', (req, res) => {
  Song
    .find({})
    .count()
    .exec((err, count) => {
      const random = Math.floor(Math.random() * count);
      Song
        .findOne()
        .skip(random)
        .limit(1)
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          if (err) {
            res.sendStatus(404).send('THIS IS A CONTROLLER GET ERROR FOR ALL SONGS ', err);
          }
        })
    })
});

// Create / POST - create a new item
app.post('/relatedSong', function (req, res) {
  res.send('Got a POST request')
})
// Read / GET - read an item
app.get('/api/mainSong/:id', function (req, res) {
  res.send('Hello World!')
})
// Update / PUT - update an item
app.put('/api/mainSong/:id/comment', function (req, res) {
  res.send('Got a PUT request at /user')
})
// Delete / DELETE - delete an item
app.delete('/api/mainSong/:id/comment', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => console.log(`DO YOU COME IN @ ${port}`));
