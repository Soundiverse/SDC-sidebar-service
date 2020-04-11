const newrelic = require('newrelic');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3400;
const controller = require('./controller.js');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/song', (req, res) => {
// console.log(res.body);
controller.getAMainSong(res.body, (err, response) => {
  if (err) {
    res.send(err);
  }
    res.send(response);
  })
});
// Create / POST - create a new item
app.post('/song', function (req, res) {
  controller.createAPlaylist(res.body, (err, response) => {
    if (err) {
      res.send(err);
    }
      res.send(response);
    })
})
// Read / GET - read an item
app.get('/song/:id', function (req, res) {
  let id = req.params;
  // console.log('requested id: ', req.params);
  controller.getRelatedSongs(id, (err, response) => {
    if (err) {
      res.send(err);
    }
    res.send(response)
  })
})
// Update / PUT - update an item
app.put('/song/:id', function (req, res) {
  let id = req.params;
  // console.log(req.params);
  controller.updateAPlaylist(id, (err, response) => {
    if (err) {
      res.send(err);
    }
    res.send(response)
  })
})
// Delete / DELETE - delete an item
app.delete('/song/:id/', function (req, res) {
  let id = req.params;
  // console.log(req.params);
  controller.deleteAPlaylist(id, (err, response) => {
    if (err) {
      res.send(err);
    }
    res.send(response)
  })
})

app.listen(port, () => console.log(`DO YOU COME IN @ ${port}`));
