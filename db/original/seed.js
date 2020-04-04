const mongoose = require('mongoose');
const { relatedSongSchema, relatedPlaylistSchema, userFiller, songSchema } = require('./schema.js');
const faker = require('faker');
const db = require('./index.js');

const Song = mongoose.model('Song', songSchema);

const generateRelatedSongs = function () {
  let relatedSongs = [];

  for (let i = 0; i < 3; i++) {
    const songName = faker.lorem.words();
    const artistName = faker.name.firstName();
    const artistLocation = faker.address.city();
    const artistFollowers = faker.random.number();
    const songLikes = faker.random.number();
    const songReposts = faker.random.number();
    const songPlays = faker.random.number();
    const songComments = faker.random.number();
    const artistImage = faker.image.avatar();
    const songImage = faker.image.image();

    let relatedSong = {
      song: songName,
      artist: artistName,
      location: artistLocation,
      followers: artistFollowers,
      ikes: songLikes,
      reposts: songReposts,
      plays: songPlays,
      comments: songComments,
      artist_image: artistImage,
      song_image: songImage
    };

    relatedSongs.push(relatedSong);
  }
  return relatedSongs;
};

const generateRelatedPlaylists = function () {
  let relatedPlaylists = [];

  for (let i = 0; i < 3; i++) {
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

const generateUserFiller = function () {
  let userFillers = [];

  for (let i = 0; i < 9; i++) {
    const userName = faker.name.firstName();
    const userLocation = faker.address.city();
    const userFollowers = faker.random.number();
    const userImage = faker.image.avatar();

    let userFiller = {
      name: userName,
      location: userLocation,
      followers: userFollowers,
      user_image: userImage
    };

    userFillers.push(userFiller);
  }
  return userFillers; 
};

const generateSongs = function () {
  let songs = [];

  for (let i = 0; i < 10000; i++) {
    const title = faker.lorem.words();
    const likes = faker.random.number();
    const reposts = faker.random.number();

    let song = new Song({
      title: title,
      likes: likes,
      reposts: reposts,
      recent_user_likes: generateUserFiller(),
      recent_user_reposts: generateUserFiller(),
      related_songs: generateRelatedSongs(),
      related_playlists: generateRelatedPlaylists()
    })
    songs.push(song);
  }
  return songs;
};

Song.collection.insertMany(generateSongs());

module.exports = Song; 