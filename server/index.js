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

app.get('/api/mainSong', (req, res) => {
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

app.listen(port, () => console.log(`DO YOU COME IN @ ${port}`));
