# sidebar-components overview
This component renders a sidebar module for a music player app page.

Server: http://localhost:3400

# setup 
``` sh
- run npm install in root directory
```


to create Seed files (adjust numbers first if necessary)
then run:

### FOR CASSANDRA DB:
``` sh
npm run seedCassandra
or node --max-old-space-size=16384 ./db/cassandra/cassandraSeed.js
```

### FOR POSTGRES
``` sh
npm run seedPostgres
or node --max-old-space-size=16384 ./db/postgres/postgresSeed.js
```
* make sure size= above is less than max RAM on your computer


- run below scripts in package.json:
```sh
  - npm run react-dev
  - npm run server-dev
  ```

# API Routes:

#### Initial Request
HTTP Method: GET 

Path: /song/:id

```sh
Response: 
  - Error code 404 
  - Successful code 200 OK returns JSON object
```
Example Output 
```sh
[
  { 
  "playlist_name" : "aut voluptas commodi", 
  "playlist_likes" : 31880, 
  "playlist_reposts" : 23221, 
  "user_name" : "Alvera", 
  "user_location" : "Shayneburgh", 
  "user_followers" : 83019, 
  "playlist_image_url" : "http://lorempixel.com/640/480/abstract", 
  "user_image_url" : "https://s3.amazonaws.com/uifaces/faces/twitter/bighanddesign/128.jpg" 
  },
  "playlist_name" : "aut voluptas commodi", 
  "playlist_likes" : 31880, 
  "playlist_reposts" : 23221, 
  "user_name" : "Alvera", 
  "user_location" : "Shayneburgh", 
  "user_followers" : 83019, 
  "playlist_image_url" : "http://lorempixel.com/640/480/abstract", 
  "user_image_url" : "https://s3.amazonaws.com/uifaces/faces/twitter/bighanddesign/128.jpg" 
  }
]
```

#### CREATE 
HTTP Method: POST
PATH: /song
```sh
Response:
  - Error code 400
  - Successful code 200 OK adds object/song to library
```

#### READ
HTTP Method: GET
PATH: /song/:id
```sh
Response:
  - Error code 404
  - Successful code 200 OK returns JSON of searched song
```
Example Output 
```sh
{
  "playlist_name" : "aut voluptas commodi", 
  "playlist_likes" : 31880, 
  "playlist_reposts" : 23221, 
  "user_name" : "Alvera", 
  "user_location" : "Shayneburgh", 
  "user_followers" : 83019, 
  "playlist_image_url" : "http://lorempixel.com/640/480/abstract", 
  "user_image_url" : "https://s3.amazonaws.com/uifaces/faces/twitter/bighanddesign/128.jpg" 
}
```

#### UPDATE
HTTP Method: PUT/PATCH
PATH: /song/:id
```sh
Response: 
  - Error code 404
  - Successful code 200 OK returns updated JSON
```

#### DELETE
HTTP Method: DELETE
PATH: /song/:id
```sh
Response:
  - Error code 400
  - Successful code 200 removes song from db
  ```
