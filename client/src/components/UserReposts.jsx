import React from 'react';
import Tooltip from './Tooltip.jsx';
import CSSModules from 'react-css-modules';
import styles from './UserReposts.css';

class UserReposts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let username = this.props.song.artist;
    let userLocation = this.props.song.location;
    let userFollowers = this.props.song.followers;
    let userImage = this.props.song.song_image;

    return (
      <div>
          <div className="userItem">
            <Tooltip image={userImage} name={username} location={userLocation} followers={userFollowers}>
              <img src={userImage} className="userImage" />
            </Tooltip>
          </div>
      </div>
    )
  }
}

export default UserReposts;

id: 8778817
title: "'Generic Cotton Shirt'"
artist: "'Jacquelyn Moore'"
location: "'Lurastad'"
followers: 9356420
likes: 3245858
reposts: 8330839
plays: 4033006
comments: 758377
genre: "latin"
artist_image: "'https://s3.amazonaws.com/uifaces/faces/twitter/ahmetsulek/128.jpg'"
song_image: "'http://lorempixel.com/640/480/food'"
user_reposts: 3794363