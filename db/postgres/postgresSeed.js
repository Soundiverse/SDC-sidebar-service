const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fs = require('fs');
const genres = [ 'spanish', 'country', 'pop', 'hip-hop', 'r&b', 'latin', 'rap', 'classical', 'alternative', 'rock', 'punk', 'heavy metal']

const songDataGenerator = () => {
  writer.pipe(fs.createWriteStream('db/postgres/writeSongs.csv'));
  for (var i = 0; i < 10000000; i++) {
    let random = Math.floor((Math.random() * 100) / 12);
    writer.write({
      id: i,
      title: `'${faker.commerce.productName()}'`,
      artist:  `'${faker.name.findName()}'`,
      location: `'${faker.address.city()}'`,
      followers: faker.random.number(),
      likes: faker.random.number(),
      reposts: faker.random.number(),
      plays: faker.random.number(),
      comments: faker.random.number(),
      genre: `'${genres[random]}'`,
      artist_image: `'${faker.image.avatar()}'`,
      song_image: `'${faker.image.image()}'`,
      user_reposts: faker.random.number()
    })
    if (i === 1000000) {
      console.log('first million completed');
      continue;
    }
  }
  // writer.end();
  console.log('done with songs')
}

songDataGenerator();

const relatedPlaylistsGenerator = function () {
  writer.pipe(fs.createWriteStream('db/postgres/writePlaylists.csv'));
  for (let i = 0; i < 4000000; i++) {
    let random = Math.floor((Math.random() * 100) / 12);
    writer.write({
      id: i,
      name: `'${faker.name.findName()}'`,
      tracks: `'${faker.commerce.productName()}'`,
      likes: faker.random.number(),
      reposts: faker.random.number(),
      creator:  `'${faker.name.findName()}'`,
      genre: `'${genres[random]}'`,
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
  writer.pipe(fs.createWriteStream('db/postgres/writeGenres.csv'));
  for (let i = 0; i < 1000000; i++) {
    let random = Math.floor((Math.random() * 100) / 12);
    writer.write({
      id: i,
      type: `'${genres[random]}'`,
      songs: `'${faker.commerce.productName()}'`,
      followers: faker.random.number(),
      likes: faker.random.number(),
    })
    if (i === 100000) {
      console.log('genres completed');
      continue;
    }
  }
  writer.end();
  console.log('done with genres');
};

genreGenerator();
