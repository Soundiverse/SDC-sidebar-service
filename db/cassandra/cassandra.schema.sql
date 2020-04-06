CREATE KEYSPACE Sidebar WITH REPLICATION = { 'class': 'SimpleStrategy', 'replication_factor': 1};

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
  PRIMARY KEY (id, genre, artist) );

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
  PRIMARY KEY (id, genre, creator) );


-- for cassandra copying from csv 
-- in cqlsh (cassandra query shell)
-- songs:
COPY Sidebar.songs (id, title, artist, location, followers, likes, reposts, plays, comments, genre, artist_image, song_image, user_reposts) FROM '/Users/kelsyvaughn/Documents/Hack Reactor/secondHalf/SDC/SDC-sidebar-service/db/cassandra/writeSongs.csv' with header=true and delimiter=',';
-- playlists:
COPY Sidebar.playlists (id, name, songs, likes, reposts, creator, genre, location, followers, playlist_image, user_image) FROM '/Users/kelsyvaughn/Documents/Hack Reactor/secondHalf/SDC/SDC-sidebar-service/db/cassandra/writePlaylists.csv' with header=true and delimiter=',';
-- genres:
-- COPY Sidebar.playlists (id, type, songs, followers, likes) FROM '/Users/kelsyvaughn/Documents/Hack Reactor/secondHalf/SDC/SDC-sidebar-service/db/cassandra/writeGenres.csv' with header=true and delimiter=',';
