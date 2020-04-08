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


- run below scripts in package.json to start server and generate bundle file:
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
        "id": 100,
        "title": "'Tasty Metal Ball'",
        "artist": "'Ms. Leonel Durgan'",
        "location": "'Ziemeborough'",
        "followers": 9037421,
        "likes": 4485367,
        "reposts": 9736897,
        "plays": 8594533,
        "comments": 8022415,
        "genre": 2,
        "artist_image": "'https://s3.amazonaws.com/uifaces/faces/twitter/ciaranr/128.jpg'",
        "song_image": "'http://lorempixel.com/640/480/cats'",
        "user_reposts": 933964
    }
]
```

#### CREATE 
HTTP Method: POST
PATH: /song
```sh
Response:
  - Error code 400
  - Successful code 201 (created) OK adds object/song to library
```
EXAMPLE INPUT:
```sh
[
  {
    "title": "FUN MEXICAN DANCE",
    "artist": "Ms. Margarita",
    "location": "Brazil",
    "genre": 4,
    "artist_image": "'https://s3.amazonaws.com/uifaces/faces/twitter/ciaranr/128.jpg'",
    "song_image": "'http://lorempixel.com/640/480/maracas'",
  }
]
```
#### CREATE 
HTTP Method: PUT
PATH: /song/:id
```sh
Response:
  - Error code 400
  - Successful code 201 (created) OK adds object/song to library
```
EXAMPLE INPUT:
```sh
[
  {
    "id": 104,
    "likes": 1,
    "comments": 4,
  }
]
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
  "id": 103,
  "title": "'Tasty Frozen Computer'",
  "artist": "'Paolo Heathcote'",
  "location": "'Susanaberg'",
  "followers": 2519188,
  "likes": 7927215,
  "reposts": 2269912,
  "plays": 2739738,
  "comments": 9874078,
  "genre": 3,
  "artist_image": "'https://s3.amazonaws.com/uifaces/faces/twitter/oksanafrewer/128.jpg'",
  "song_image": "'http://lorempixel.com/640/480/food'",
  "user_reposts": 3695064
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
