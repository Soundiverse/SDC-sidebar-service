import React from 'react';
import UserReposts from './UserReposts.jsx';
import CSSModules from 'react-css-modules';
import styles from './TotalReposts.css';

function TotalReposts(props) {
  return (
    <div>
      <div className="headerContainer">
        <div className="headerImage"><img src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/repost.png" className="headerIcon" /> </div>
        <div className="headerTitle">{props.user_reposts} Reposts</div>
        <div className="headerMore">View all</div>
      </div>

      <div className="content">
        <div className="userContainer">
          {props.recentUserReposts.map((song) =>
            <UserReposts key={song.id} song={song} />)}
        </div>
      </div>
    </div>
  )
}

export default TotalReposts; 