// const { relatedSongSchema, relatedPlaylistSchema, userFiller, songSchema } = require('./schema.js');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fs = require('fs');
const genres = [ 'spanish', 'country', 'pop', 'hip-hop', 'r&b', 'latin', 'rap', 'classical', 'alternative', 'rock', 'punk', 'heavy metal']

const relatedSongsGenerator = () => {
  let random = Math.floor((Math.random() * 100) / 12);
  writer.pipe(fs.createWriteStream('db/cassandra/writeSongs.csv'));
  for (var i = 0; i < 4000000; i++) {
    writer.write({
      id: i,
      title: `"${faker.lorem.words()}"`,
      artist: `"${faker.name.firstName()}"`,
      location: `"${faker.address.city()}"`,
      followers: faker.random.number(),
      likes: faker.random.number(),
      reposts: faker.random.number(),
      plays: faker.random.number(),
      comments: faker.random.number(),
      genre: genres[random],
      artistImage: `"${faker.image.avatar()}"`,
      songImage: `"${faker.image.image()}"`,
      userReposts: faker.random.number()
    })
    if (i === 1000000) {
      console.log('first million related songs completed');
      continue;
    }
  }
  // writer.end();
  console.log('done with related songs')
}

relatedSongsGenerator();

const relatedPlaylistsGenerator = function () {
  writer.pipe(fs.createWriteStream('db/cassandra/writePlaylists.csv'));
  let random = Math.floor((Math.random() * 100) / 12);
  for (let i = 0; i < 3000000; i++) {
    writer.write({
      id: i,
      name: `"${faker.lorem.words()}"`,
      songs: `"${faker.lorem.words()}"`,
      likes: faker.random.number(),
      reposts: faker.random.number(),
      creator: `"${faker.name.firstName()}"`,
      genre: genres[random],
      location: faker.random.number(),
      followers: faker.random.number(),
      playlist_image: `"${faker.image.image()}"`,
      user_image: `"${faker.image.avatar()}"`
    });
    if (i === 1000000) {
      console.log('first million related playlists completed');
      continue;
    }
  }
  // writer.end();
  console.log('done with related playlists');
};

relatedPlaylistsGenerator();


const genreGenerator = function () {
  writer.pipe(fs.createWriteStream('db/cassandra/writeGenres.csv'));
  for (let i = 0; i < 100000; i++) {
    let random = Math.floor((Math.random() * 100) / 12);
    writer.write({
      id: i,
      type: genres[random],
      followers: faker.random.number(),
      likes: faker.random.number(),
    })
    if (i === 1000000) {
      console.log('first million genres completed');
      continue;
    }
  }
  writer.end();
  console.log('done with genres');
};

genreGenerator();

// module.exports = Song; 