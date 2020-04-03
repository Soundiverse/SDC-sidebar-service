CREATE KEYSPACE Sidebar WITH REPLICATION = { 'class': 'SimpleStrategy', 'replication_factor': 3};

CREATE TABLE Sidebar.songs (
  id int,
  title varchar,
  artist varchar,
  location varchar,
  followers int,
  likes int,
  reposts int,
  plays int,
  comments int,
  genre varchar,
  artist_image varchar,
  song_image varchar,
  user_reposts int,
  PRIMARY KEY (id, title, artist) );

CREATE TABLE Sidebar.playlists (
  id int,
  name varchar,
  songs varchar,
  likes int,
  reposts int,
  creator varchar,
  genre varchar,
  location varchar,
  followers int,
  playlist_image varchar,
  user_image varchar,
  PRIMARY KEY (id, name, creator) );

CREATE TABLE Sidebar.genres (
  id int,
  type varchar,
  followers int,
  likes int,
  PRIMARY KEY (id, type, likes, followers) );

