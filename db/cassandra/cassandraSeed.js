const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fs = require('fs');
const genres = [ 'spanish', 'country', 'pop', 'hip-hop', 'r&b', 'latin', 'rap', 'classical', 'alternative', 'rock', 'punk', 'heavy metal']
const tracks = require('./song.js');

// const relatedSongsGenerator = () => {
//   writer.pipe(fs.createWriteStream('db/cassandra/song.csv'));
//   for (var i = 0; i < 10000; i++) {
//     writer.write({
//       track: title,
//     });
    
//   }
//   writer.end();
//   console.log('done with related songs')
// }

const relatedSongsGenerator = () => {
  writer.pipe(fs.createWriteStream('db/cassandra/writeSongsOpt.csv'));
  for (var i = 0; i < 100; i++) {
    let random = Math.floor((Math.random() * 100) / 12);
    let title = `'${faker.commerce.productName()}'`;
    writer.write({
      id: i,
      title: title,
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
    songs.push(title);
    if (i === 3000000) {
      console.log('halfway through related songs!');
      continue;
    }
    songs.push(title);
  }
  console.log(songs);

  // writer.end();
  console.log('done with related songs')
}

relatedSongsGenerator();

const relatedPlaylistsGenerator = function () {
  writer.pipe(fs.createWriteStream('db/cassandra/writePlaylistsOpt.csv'));
  for (let i = 0; i < 100; i++) {
    let random = Math.floor((Math.random() * 100) / 12);
    writer.write({
      id: i,
      name: `'${faker.name.findName()}'`,
      tracks: [tracks.slice(random, random * 2)],
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
