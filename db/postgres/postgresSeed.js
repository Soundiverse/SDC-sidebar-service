const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fs = require('fs');
const genres = [ 'spanish', 'country', 'pop', 'hip-hop', 'r&b', 'latin', 'rap', 'classical', 'alternative', 'rock', 'punk', 'heavy metal', 'jazz', 'soul', 'metal']

const songDataGenerator = () => {
  writer.pipe(fs.createWriteStream('db/postgres/writeSongsIndexed.csv'));
  for (var i = 0; i < 1000000; i++) {
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

