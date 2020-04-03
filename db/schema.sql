CREATE TABLE "relatedSongSchema" (
  "_id" SERIAL PRIMARY KEY,
  "song" varchar,
  "artist" varchar,
  "location" varchar,
  "followers" int,
  "likes" int,
  "reposts" int,
  "plays" int,
  "comments" int,
  "artist_image" varchar,
  "song_image" varchar,
  "related_playlist" int
);

CREATE TABLE "relatedPlaylistSchema" (
  "_id" int PRIMARY KEY,
  "name" varchar,
  "likes" int,
  "reposts" int,
  "user" varchar,
  "location" varchar,
  "followers" int,
  "playlist_image" varchar,
  "user_image" varchar
);

CREATE TABLE "userFiller" (
  "_id" int PRIMARY KEY,
  "name" varchar,
  "location" varchar,
  "followers" int,
  "user_image" varchar
);

CREATE TABLE "songSchema" (
  "_id" int,
  "title" varchar,
  "likes" int,
  "reposts" int,
  "recent_user_likes" REFERENCES,
  "recent_user_reposts" REFERENCES,
  "related_songs" REFERENCES,
  "related_playlists" REFERENCES,
  PRIMARY KEY ("recent_user_likes", "recent_user_reposts", "related_songs", "related_playlists")
);

ALTER TABLE "songSchema" ADD FOREIGN KEY ("recent_user_likes") REFERENCES "userFiller" ("_id");

ALTER TABLE "songSchema" ADD FOREIGN KEY ("recent_user_reposts") REFERENCES "userFiller" ("_id");

ALTER TABLE "relatedSongSchema" ADD FOREIGN KEY ("_id") REFERENCES "songSchema" ("related_songs");

ALTER TABLE "songSchema" ADD FOREIGN KEY ("related_playlists") REFERENCES "relatedPlaylistSchema" ("_id");

