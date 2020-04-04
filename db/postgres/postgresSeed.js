// const { relatedSongSchema, relatedPlaylistSchema, userFiller, songSchema } = require('./schema.js');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fs = require('fs');

const dataGenerator = () => {
  writer.pipe(fs.createWriteStream('write.csv'));
  for (var i = 0; i < 10000000; i++) {
    counter++;
    writer.write({
      title: faker.lorem.words(),
      artist: faker.name.firstName(),
      location: faker.address.city(),
      followers: faker.random.number(),
      likes: faker.random.number(),
      reposts: faker.random.number(),
      plays: faker.random.number(),
      comments: faker.random.number(),
      genre: faker.hacker.adjective(),
      artistImage: faker.image.avatar(),
      songImage: faker.image.image(),
      userReposts: faker.random.number(),
    })
    if (counter = 1000000) {
      console.log('first million completed');
      continue;
    }
  }
  writer.end();
  console.log('done')
}

dataGenerator();

// const generateRelatedSongs = function () {
//   let relatedSongs = [];

//   for (let i = 0; i < 10000; i++) {
//     const title = faker.lorem.words();
//     const artist = faker.name.firstName();
//     const location = faker.address.city();
//     const followers = faker.random.number();
//     const likes = faker.random.number();
//     const reposts = faker.random.number();
//     const plays = faker.random.number();
//     const comments = faker.random.number();
//     const genre = faker.hacker.adjective();
//     const artistImage = faker.image.avatar();
//     const songImage = faker.image.image();
//     const userReposts = faker.random.number();

//     let relatedSong = {
//       song: songName,
//       artist: artistName,
//       location: artistLocation,
//       followers: artistFollowers,
//       ikes: songLikes,
//       reposts: songReposts,
//       plays: songPlays,
//       comments: songComments,
//       artist_image: artistImage,
//       song_image: songImage
//     };

//     relatedSongs.push(relatedSong);
//   }
//   return relatedSongs;
// };

const generateRelatedPlaylists = function () {
  let relatedPlaylists = [];

  for (let i = 0; i < 1000; i++) {
    const playlistName = faker.lorem.words();
    const playlistLikes = faker.random.number();
    const playlistReposts = faker.random.number();
    const userName = faker.name.firstName();
    const userLocation = faker.address.city();
    const userFollowers = faker.random.number();
    const playlistImage = faker.image.image();
    const userImage = faker.image.avatar();

    let relatedPlaylist = {
      name: playlistName,
      likes: playlistLikes,
      reposts: playlistReposts,
      user: userName,
      location: userLocation,
      followers: userFollowers,
      playlist_image: playlistImage,
      user_image: userImage
    };

    relatedPlaylists.push(relatedPlaylist);
  }
  return relatedPlaylists;
};

// const generateUserFiller = function () {
//   let userFillers = [];


const generateSongs = function () {
  let genres = [];

  for (let i = 0; i < 10000; i++) {
    const title = faker.lorem.words();
    const likes = faker.random.number();
    const follows = faker.random.number();

    let genre = new Genre({
      type: title,
      likes: likes,
      followers: follows,
    //   recent_user_likes: generateUserFiller(),
    //   recent_user_reposts: generateUserFiller(),
    //   related_songs: generateRelatedSongs(),
    //   related_playlists: generateRelatedPlaylists()
    })
    genres.push(genre);
  }
  return songs;
};

// Song.collection.insertMany(generateSongs());

module.exports = Song; 