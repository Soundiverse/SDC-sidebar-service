const { Pool, Client } = require('pg');

// const pool = new Pool({
//   // server [localhost]: <enter>
//   Database: 'sidebar'
//   // port [5400]: <enter>
//   // username [postgres]: <enter>
//   // password: <macbook pro password>
// });

// pool.query('SELECT NOW()', (err, res) => {
//     if (err) { 
//         console.log('there was an err in your postgres query', err);
//     }
//     console.log('successful pool query of postgres: ', JSON.parse(JSON.stringify(res.rows)));
//     pool.end();
// });

const client = new Client({
    // server [localhost]: <enter>
    Database: 'sidebar'
    // port [5400]: <enter>
    // username [postgres]: <enter>
    // password: <macbook pro password>
});

client.connect()
client.query('SELECT NOW()', (err, res) => {
    if (err) { 
        console.log('there was an err in your postgres query', err);
    }
    console.log('successful client query of postgres: ', JSON.parse(JSON.stringify(res.rows)));
    pool.end();
})
