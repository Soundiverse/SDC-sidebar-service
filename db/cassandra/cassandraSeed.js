// const { relatedSongSchema, relatedPlaylistSchema, userFiller, songSchema } = require('./schema.js');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fs = require('fs');
const genres = [ 'spanish', 'country', 'pop', 'hip-hop', 'r&b', 'latin', 'rap', 'classical', 'alternative', 'rock', 'punk', 'heavy metal']

const relatedSongsGenerator = () => {
  let random = Math.floor((Math.random() * 100) / 12);
  writer.pipe(fs.createWriteStream('db/cassandra/writeSongs.csv'));
  for (var i = 0; i < 6000000; i++) {
    writer.write({
      id: i,
      title: `'${faker.lorem.words()}'`,
      artist:  `'${faker.name.firstName()}'`,
      location: `'${faker.address.city()}'`,
      followers: faker.random.number(),
      likes: faker.random.number(),
      reposts: faker.random.number(),
      plays: faker.random.number(),
      comments: faker.random.number(),
      genre: genres[random],
      artist_image: `'${faker.image.avatar()}'`,
      song_image: `'${faker.image.image()}'`,
      user_reposts: faker.random.number()
    })
    if (i === 3000000) {
      console.log('halfway through related songs!');
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
  for (let i = 0; i < 4000000; i++) {
    writer.write({
      id: i,
      name: `'${faker.lorem.words()}'`,
      songs: `'${faker.lorem.words()}'`,
      likes: faker.random.number(),
      reposts: faker.random.number(),
      creator:  `'${faker.name.firstName()}'`,
      genre: genres[random],
      location: `'${faker.address.city()}'`,
      followers: faker.random.number(),
      playlist_image: `'${faker.image.image()}'`,
      user_image: `'${faker.image.avatar()}'`
    });
    if (i === 2000000) {
      console.log('halfway through related playlists!');
      continue;
    }
  }
  // writer.end();
  console.log('done with related playlists');
};

relatedPlaylistsGenerator();


const genreGenerator = function () {
  writer.pipe(fs.createWriteStream('db/cassandra/writeGenres.csv'));
  for (let i = 0; i < 100; i++) {
    let random = Math.floor((Math.random() * 100) / 12);
    writer.write({
      id: i,
      type: genres[random],
      songs: `'${faker.lorem.words()}'`,
      followers: faker.random.number(),
      likes: faker.random.number(),
    })
    if (i === 100000) {
      console.log('genres completed');
      continue;
    }
  }
  writer.end();
  console.log('done');
};

genreGenerator();
