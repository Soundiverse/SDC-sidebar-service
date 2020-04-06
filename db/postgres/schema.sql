DROP DATABASE IF EXISTS;

CREATE DATABASE Sidebar;

USE Sidebar;

CREATE TABLE tracks (
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
  PRIMARY KEY (id)
);

CREATE TABLE playlists (
  id int,
  name varchar,
  tracks varchar,
  likes int,
  reposts int,
  creator varchar,
  genre varchar,
  location varchar,
  followers int,
  playlist_image varchar,
  user_image varchar,
  PRIMARY KEY (id)
);

CREATE TABLE genres (
  id int,
  type varchar,
  songs varchar,
  followers int,
  likes int,
  PRIMARY KEY (id)
);

ALTER TABLE tracks ADD FOREIGN KEY (genre) REFERENCES genres (id, type);
ALTER TABLE playlists ADD FOREIGN KEY (genre) REFERENCES genres (type);
ALTER TABLE playlists ADD FOREIGN KEY (tracks) REFERENCES tracks (title);
ALTER TABLE genres ADD FOREIGN KEY (songs) REFERENCES tracks (title);

-- tracks FULL JOIN genres USING ( songs );
-- genres FULL JOIN tracks USING ( genres );
\COPY tracks (id,title,artist,location,followers,likes,reposts,plays,comments,genre,artist_image,song_image,user_reposts) FROM '/Users/kelsyvaughn/Documents/Hack Reactor/secondHalf/SDC/SDC-sidebar-service/db/postgres/writeSongs.csv' DELIMITER ',' CSV HEADER;
\COPY playlists (id,name,tracks,likes,reposts,creator,genre,location,followers,playlist_image,user_image) FROM '/Users/kelsyvaughn/Documents/Hack Reactor/secondHalf/SDC/SDC-sidebar-service/db/postgres/writePlaylists.csv' DELIMITER ',' CSV HEADER;
\COPY genres (id,type,songs,followers,likes) FROM '/Users/kelsyvaughn/Documents/Hack Reactor/secondHalf/SDC/SDC-sidebar-service/db/postgres/writeGenres.csv' DELIMITER ',' CSV HEADER;
-- (id, title, artist, location, followers, likes, reposts, plays, comments, genre, artist_image, song_image, recent_user_reposts)