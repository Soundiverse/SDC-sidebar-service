// this will be the connection between postgres and server
// const config = require('../config.js');
const {Pool, client} = require('pg');
const faker = require('faker');

const pool = new Pool({
  database: 'sidebar',
  // password: config.password,
  port: 5432,
})

const getAMainSong = (request, callback) => {
    // let random = Math.floor((Math.random() * 10000000) / 100);
    let random = faker.random.number({min:5, max:10000000})
    pool.query(`SELECT * FROM tracks where id = ${random};`, (error, results) => {
        if (error) {
          console.log('err getting tracks', error);
        }
        callback(null, JSON.parse(JSON.stringify(results.rows)));
        // pool.end();
      });
}

const getRelatedSongs = (req, callback) => {
  let relatedSongs = [];
  let relatedPlaylists = [];
  // let id = req.id;
  // for stress test purposes, to generate a random id
  let id = faker.random.number({min:5, max:10000000})
  // console.log(id);
  pool.query(`SELECT * FROM tracks where id = ${id};`, (err, results) => {
    if (err) {
      console.log('err getting song', err)
    }
    let querySong = JSON.parse(JSON.stringify(results.rows));
    relatedSongs.push(querySong[0]);
    // console.log('related song array part 1', relatedSongs);
    let songGenre = querySong[0].genre;
    pool.query(`SELECT * from tracks WHERE genre = '${songGenre}' LIMIT 3;`, (err, results) => {
      if (err) {
        console.log('err getting genre related songs', err);
      }
      /// need to change this array into it's objects, so it's not nested? or should this be done on the frontend when needed?
      relatedSongs.push(results.rows);
      // console.log('related song array part 2', relatedSongs);
      pool.query(`SELECT * from playlists WHERE genre = '${songGenre}' LIMIT 3;`, (err, results) => {
        // console.log(results.rows);
        relatedPlaylists = results.rows;
        if (err) {
          console.log('err getting genre related playlists', err)
        }
        relatedSongs.push(relatedPlaylists);
        // console.log('related song array part 3', relatedSongs);
        callback(null, relatedSongs);
      })
    })
  })
}

const createAPlaylist = (request, response) => {
  const { name, tracks, genre, creator, location } = request.body
  pool.query('INSERT INTO playlists (name, tracks, genre, creator, location) VALUES ($1, $2, $3, $4, $5)', [name, tracks, genre, creator, location], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Playlist added with title: ${result.title}`)
  })
}

const updateAPlaylist = (request, response) => {
  const id = request.id;
  const { title, tracks } = request.body
  pool.query('UPDATE playlists SET title = $1, tracks = $2 WHERE id = $3',
    [title, tracks, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Playists modified with ID: ${id}`)
    }
  )
}

const deleteAPlaylist = (request, response) => {
  const id = request.id;
  pool.query('DELETE FROM playlists WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}
module.exports = {
  getAMainSong,
  getRelatedSongs,
  createAPlaylist,
  updateAPlaylist,
  deleteAPlaylist
}