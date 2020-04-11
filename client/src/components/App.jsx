import React from 'react';
import axios from 'axios';
import CSSModules from 'react-css-modules';
import styles from './App.css';
import RelatedSongsList from './RelatedSongsList.jsx';
import RelatedPlaylistsList from './RelatedPlaylistsList.jsx';
import TotalLikes from './TotalLikes.jsx';
import TotalReposts from './TotalReposts.jsx';
import Links from './Links.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainSong: [],
      mainSongLikes: 0,
      mainSongReposts: 0,
      relatedSongs: [],
      relatedPlaylists: [],
      recentUserLikes: [],
      recentUserReposts: []
    };

    this.getMainSong = this.getMainSong.bind(this);
  }

  getMainSong() {
    let random = Math.floor((Math.random() * 10000000) / 100);
    return axios.get(`/song/${random}`)
      .then(res => {
        console.log('RES DATA FROM GET ALL SONGS GET REQUEST FROM CLIENT SIDE ', res.data);
        this.setState({
          mainSong: res.data[0],
          mainSongLikes: res.data[0].likes,
          mainSongReposts: res.data[0].reposts,
          relatedSongs: res.data[1],
          relatedPlaylists: res.data[2],
          recentUserLikes: res.data,
          recentUserReposts: res.data
        })
      })
      .catch((err) => {
        console.log('get err so many errs on client side ', err);
      })
  }

  componentDidMount() {
    this.getMainSong();
  }

  render() {
    return (
      <div>
        <div className="sidebar">
          <div className="sidebarContent">
            <RelatedSongsList relatedSongs={this.state.relatedSongs} />
            <RelatedPlaylistsList relatedPlaylists={this.state.relatedPlaylists} />
            <TotalLikes total={this.state.mainSongLikes} recentUserLikes={this.state.recentUserLikes} />
            <TotalReposts total={this.state.mainSongReposts} recentUserReposts={this.state.recentUserReposts} />
          </div>
          <div className="linksContent">
            <Links />
          </div>
        </div>
      </div>
    )
  }

}

export default App;


// getTest () {
//     axios.get('/test')
//         .then(res => {
//             console.log('get test res ', res);
//         })
//         .catch(err => console.log('get test err ', err))
// }