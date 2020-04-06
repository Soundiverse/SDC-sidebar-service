DROP DATABASE IF EXISTS;

CREATE DATABASE SidebarOpt;

\c SidebarOpt;

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
  genre int,
  artist_image varchar,
  song_image varchar,
  user_reposts int,
  PRIMARY KEY (id)
);

CREATE TABLE playlists (
  id int,
  name varchar,
  tracks int,
  likes int,
  reposts int,
  creator varchar,
  genre int,
  location varchar,
  followers int,
  playlist_image varchar,
  user_image varchar,
  PRIMARY KEY (id)
);

CREATE TABLE genres (
  id int,
  type varchar,
  songs int,
  followers int,
  likes int,
  PRIMARY KEY (id)
);

\COPY tracks (id,title,artist,location,followers,likes,reposts,plays,comments,genre,artist_image,song_image,user_reposts) FROM '/Users/kelsyvaughn/Documents/Hack Reactor/secondHalf/SDC/SDC-sidebar-service/db/postgres/writeSongsOpt.csv' DELIMITER ',' CSV HEADER;
\COPY playlists (id,name,tracks,likes,reposts,creator,genre,location,followers,playlist_image,user_image) FROM '/Users/kelsyvaughn/Documents/Hack Reactor/secondHalf/SDC/SDC-sidebar-service/db/postgres/writePlaylistsOpt.csv' DELIMITER ',' CSV HEADER;
\COPY genres (id,type,songs,followers,likes) FROM '/Users/kelsyvaughn/Documents/Hack Reactor/secondHalf/SDC/SDC-sidebar-service/db/postgres/writeGenresOpt.csv' DELIMITER ',' CSV HEADER;

ALTER TABLE tracks ADD FOREIGN KEY (genre) REFERENCES genres (id);
ALTER TABLE playlists ADD FOREIGN KEY (genre) REFERENCES genres (id);
ALTER TABLE playlists ADD FOREIGN KEY (tracks) REFERENCES tracks (id);
ALTER TABLE genres ADD FOREIGN KEY (songs) REFERENCES tracks (id);