const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
    contactPoints: ['localhost'],
    localDataCenter: 'datacenter1',
    keyspace: 'Sidebar'
});
client.connect();

client.execute('INSERT Sidebar.songs (id, title, artist, location, followers, likes, reposts, plays, comments, genre, artist_image, song_image, user_reposts) FROM '/Users/kelsyvaughn/Documents/Hack Reactor/secondHalf/SDC/SDC-sidebar-service/db/cassandra/writeSongs.csv' with header=true and delimiter=',';', (err, res) => {
    console.log(err, res.rows[0])
});

client.execute('SELECT * from Sidebar.songs', (err, res) => {
    if (err) {
        console.log('there was an err in your cassandra query', err);
    }
    console.log('cassandra query successful!', res);
});