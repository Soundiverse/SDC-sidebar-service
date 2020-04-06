const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fs = require('fs');
const genres = [ 'spanish', 'country', 'pop', 'hip-hop', 'r&b', 'latin', 'rap', 'classical', 'alternative', 'rock', 'punk', 'heavy metal']

const relatedSongsGenerator = () => {
  writer.pipe(fs.createWriteStream('db/cassandra/writeSongs.csv'));
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
    if (i === 3000000) {
      console.log('halfway through related songs!');
      continue;
    }
  }

  writer.end();
  console.log('done with related songs')
}

relatedSongsGenerator();

const relatedPlaylistsGenerator = function () {
  writer.pipe(fs.createWriteStream('db/cassandra/writePlaylists.csv'));
  for (let i = 0; i < 4000000; i++) {
    let random = Math.floor((Math.random() * 100) / 12);
    writer.write({
      id: i,
      name: `'${faker.name.findName()}'`,
      songs: `'${faker.commerce.productName()}'`,
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
  writer.end();
  console.log('done with related playlists');
};

relatedPlaylistsGenerator();
