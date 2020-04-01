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
Path: GET 
HTTP Method: /mainSong
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
PATH: POST 
HTTP Method: /song/:id
```sh
Response:
  - Error code 400
  - Successful code 200 OK adds object/song to library
```

#### READ
PATH: GET 
HTTP Method: /mainSong/:id
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
PATH: PUT 
HTTP Method: /mainSong/:id
```sh
Response: 
  - Error code 404
  - Successful code 200 OK returns updated JSON
```

#### DELETE
PATH: DELETE 
HTTP Method: /mainSong/:id/song
```sh
Response:
  - Error code 400
  - Successful code 200 removes song from db
  ```
