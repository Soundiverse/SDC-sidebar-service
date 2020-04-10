const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fs = require('fs');
const genres = [ 'spanish', 'country', 'pop', 'hip-hop', 'r&b', 'latin', 'rap', 'classical', 'alternative', 'rock', 'punk', 'heavy metal', 'jazz', 'soul', 'metal']

const songDataGenerator = () => {
  writer.pipe(fs.createWriteStream('db/postgres/writeSongsIndexed.csv'));
  for (var i = 0; i < 10000000; i++) {
    let random = Math.floor((Math.random() * 100) / 15);
    writer.write({
      id: i,
      title: `'${faker.commerce.productName()}'`,
      artist:  `'${faker.name.findName()}'`,
      location: `'${faker.address.city()}'`,
      followers: faker.random.number({min:5, max:10000000}),
      likes: faker.random.number({min:5, max:10000000}),
      reposts: faker.random.number({min:5, max:10000000}),
      plays: faker.random.number({min:5, max:10000000}),
      comments: faker.random.number({min:5, max:10000000}),
      genre: genres[random],
      artist_image: `'${faker.image.avatar()}'`,
      song_image: `'${faker.image.image()}'`,
      user_reposts: faker.random.number({min:5, max:10000000})
    })
    if (i === 1000000) {
      console.log('first million completed');
      continue;
    }
  }
  writer.end();
  console.log('done with songs')
}

songDataGenerator();

const relatedPlaylistsGenerator = function () {
  writer.pipe(fs.createWriteStream('db/postgres/writePlaylistsIndexed.csv'));
  for (let i = 0; i < 4000000; i++) {
    let random = Math.floor((Math.random() * 100) / 12);
    // songs below is the number of songs from tracks table that belong on this playlist (it is a random #)
    writer.write({
      id: i,
      name: `'${faker.name.findName()}'`,
      tracks: faker.random.number({min:3, max:25}),
      likes: faker.random.number({min:5, max:10000}),
      reposts: faker.random.number({min:5, max:10000}),
      creator:  `'${faker.name.findName()}'`,
      genre: genres[random],
      location: `'${faker.address.city()}'`,
      followers: faker.random.number({min:5, max:10000}),
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


// const genreGenerator = function () {
//   writer.pipe(fs.createWriteStream('db/postgres/writeGenresOpt.csv'));
//   for (let i = 0; i < 100000; i++) {
//     // let random = Math.floor((Math.random() * 100) / 12);
//     // let fakerArray = [faker.random.number({min:5, max:10000000}), faker.random.number({min:5, max:10000000}), faker.random.number({min:5, max:10000000}), faker.random.number({min:5, max:10000000}), faker.random.number({min:5, max:10000000}), faker.random.number({min:5, max:10000000}), faker.random.number({min:5, max:10000000}), faker.random.number({min:5, max:10000000}), faker.random.number({min:5, max:10000000}), faker.random.number({min:5, max:10000000}), faker.random.number({min:5, max:10000000}), faker.random.number({min:5, max:10000000}), faker.random.number({min:5, max:10000000})];
//     writer.write({
//       id: i,
//       type: faker.commerce.color(),
//       songs: faker.random.number({min:5, max:10000000}),
//       followers: faker.random.number({min:5, max:10000000}),
//       likes: faker.random.number({min:5, max:10000000}),
//     })
//     if (i === 100000) {
//       console.log('genres completed');
//       continue;
//     }
//   }
//   writer.end();
//   console.log('done with genres');
// };

// genreGenerator();
