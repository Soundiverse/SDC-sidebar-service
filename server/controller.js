// this will be the connection between postgres and server
const config = require('../config.js');
const {Pool, client} = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sidebaropt',
  password: config.password,
  port: 5400,
})

const getAMainSong = (request, callback) => {
    let random = Math.floor((Math.random() * 100) / 10000);

    pool.query(`SELECT * FROM tracks where id = ${random};`, (error, results) => {
        if (error) {
          console.log('err getting tracks', error);
        }
        callback(null, JSON.parse(JSON.stringify(results.rows)));
        // pool.end();
      });
    }

const getRelatedSongs = (req, res) => {
  let relatedSongs = [];
  let relatedPlaylists = [];
  const random = Math.floor((Math.random() * 100) / 1000);
  pool.query(`SELECT * FROM playlists WHERE id = ${random}`)
  // .then(playlist => {
  //   relatedPlaylists.push(playlist)
  //   pool.query(`SELECT * FROM tracks where genre = ${playlist.genre} LIMIT ${playlist.tracks}`)
  // .then()
  .then((response) => res.send(response.rows))
  .catch((e) => console.log(e));
// })
}
// const getSongsById = (req, res) => {
//     const id = parseInt(request.params.id)

//     pool.query('SELECT * FROM users WHERE id = 9999999', [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
// }

module.exports = {
  getAMainSong,
  getRelatedSongs
}