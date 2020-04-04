DROP DATABASE if exists Sidebar;

CREATE DATABASE Sidebar;

USE Sidebar;

CREATE TABLE tracks (
  _id SERIAL PRIMARY KEY,
  title varchar,
  artist varchar,
  location varchar,
  followers int,
  likes int,
  reposts int,
  plays int,
  comments int,
  genre REFERENCES,
  artist_image varchar,
  song_image varchar,
  recent_user_likes int,
  recent_user_reposts int
);

CREATE TABLE playlists (
  _id int PRIMARY KEY,
  name varchar,
  tracks REFERENCES,
  likes int,
  reposts int,
  user varchar,
  genre REFERENCES,
  location varchar,
  followers int,
  playlist_image varchar,
  user_image varchar
);

CREATE TABLE genres (
  _id int,
  type varchar,
  followers int,
  likes int
);

ALTER TABLE genres ADD FOREIGN KEY (_id) REFERENCES songs (genre);
ALTER TABLE genres ADD FOREIGN KEY (_id) REFERENCES playlists (genre);
ALTER TABLE songs ADD FOREIGN KEY (title) REFERENCES playlists (songs);
