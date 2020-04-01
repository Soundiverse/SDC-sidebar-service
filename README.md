# sidebar-components overview
This component renders a sidebar module for a music player app page.

Server: http://localhost:3400

# setup 
``` sh
- run npm install in root directory
```
- run below scripts in package.json:
```sh
  - npm run seed 
  - npm run react-dev
  - npm run server-dev
  ```


# API Routes:

#### Initial Request
HTTP Method: GET 
Path: /mainSong
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
PATH: /song/:id
```sh
Response:
  - Error code 400
  - Successful code 200 OK adds object/song to library
```

#### READ
HTTP Method: GET
PATH: /mainSong/:id
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
PATH: /mainSong/:id
```sh
Response: 
  - Error code 404
  - Successful code 200 OK returns updated JSON
```

#### DELETE
HTTP Method: DELETE
PATH: /mainSong/:id/song
```sh
Response:
  - Error code 400
  - Successful code 200 removes song from db
  ```
