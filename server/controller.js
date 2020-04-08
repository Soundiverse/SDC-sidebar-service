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

const getRelatedSongs = (request, callback) => {
    // let random = Math.floor((Math.random() * 100) / 1000000);
    pool.query('SELECT * FROM tracks where id = 9999999;', (error, results) => {
        if (error) {
          console.log('err getting tracks', error);
        }
        callback(null, JSON.parse(JSON.stringify(results.rows)));
        // pool.end();
      });
}

const getSongsById = (req, res) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = 9999999', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

module.exports = {
    getRelatedSongs,
    getSongsById
}