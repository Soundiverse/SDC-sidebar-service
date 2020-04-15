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

CREATE INDEX artist_index ON tracks USING hash (artist);

CREATE TABLE playlists (
  id int,
  name varchar,
  tracks int,
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

CREATE INDEX genre_index ON tracks USING hash (genre);

-- CREATE TABLE genres (
--   id int,
--   type varchar,
--   songs int,
--   followers int,
--   likes int,
--   PRIMARY KEY (id)
-- ); removed when indexed playlists and tracks

\COPY tracks (id,title,artist,location,followers,likes,reposts,plays,comments,genre,artist_image,song_image,user_reposts) FROM '/Users/kelsyvaughn/Documents/Hack Reactor/secondHalf/SDC/SDC-sidebar-service/db/postgres/writeSongsIndexed.csv' DELIMITER ',' CSV HEADER;
\COPY playlists (id,name,tracks,likes,reposts,creator,genre,location,followers,playlist_image,user_image) FROM '/Users/kelsyvaughn/Documents/Hack Reactor/secondHalf/SDC/SDC-sidebar-service/db/postgres/writePlaylistsIndexed.csv' DELIMITER ',' CSV HEADER;
-- \COPY genres (id,type,songs,followers,likes) FROM '/Users/kelsyvaughn/Documents/Hack Reactor/secondHalf/SDC/SDC-sidebar-service/db/postgres/seedFiles/writeGenresOpt.csv' DELIMITER ',' CSV HEADER;
\COPY tracks (id,title,artist,location,followers,likes,reposts,plays,comments,genre,artist_image,song_image,user_reposts) FROM '/home/ec2-user/SDC-sidebar-service/db/postgres/writeSongsIndexed.csv' DELIMITER ',' CSV HEADER;
\COPY playlists (id,name,tracks,likes,reposts,creator,genre,location,followers,playlist_image,user_image) FROM '/home/ec2-user/SDC-sidebar-service/db/postgres/writePlaylistsIndexed.csv' DELIMITER ',' CSV HEADER;
-- ALTER TABLE tracks ADD FOREIGN KEY (genre) REFERENCES genres (id);
-- ALTER TABLE playlists ADD FOREIGN KEY (genre) REFERENCES genres (id);
ALTER TABLE playlists ADD FOREIGN KEY (tracks) REFERENCES tracks (id);
-- ALTER TABLE genres ADD FOREIGN KEY (songs) REFERENCES tracks (id);

SELECT * from playlists INNER JOIN genres on tracks.genre FROM tracks.genre = genres.id where id = 6; CREATE INDEX artist ON tracks USING hash (column);
-- CREATE INDEX <index name> ON <table name> USING HASH (<column name>);
SELECT * from tracks WHERE artist LIKE '%${tracks.artist}%';

scp -i ~/Documents/Hack\ Reactor/secondHalf/this-one-now.pem ~/Documents/Hack\ Reactor/secondHalf/writeSongsIndexed.csv  ec2-user@ec2-54-183-195-165.us-west-1.compute.amazonaws.com:~/data/
