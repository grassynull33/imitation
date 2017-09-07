import React, { Component } from 'react';

// CSS goes here
import './Facebook.css';

// COMPONENTS go here

class Facebook extends Component {
  render() {
    return (
      <section className="Facebook">
        <header>
          <div className="container">
            <img src="" alt="Facebook"/>
            <input type="text" placeholder="Search"/>
            <img src="" alt="Profile Pic" />
            <ul>
              <li>John</li>
              <li>Home</li>
            </ul>
            <ul>
              <li>Friend Requests</li>
              <li>Messages</li>
              <li>Notifications</li>
            </ul>
            <ul>
              <li>Questions</li>
              <li>Dropdown</li>
            </ul>
          </div>
        </header>
        <div className="main">
          <div className="left-sidebar">
            <h2>John Doe</h2>
            <ul>
              <li>News Feed</li>
              <li>Messenger</li>
              <li>Watch</li>
              <li>Marketplace</li>
            </ul>
            <h3>Shortcuts</h3>
            <ul>
              <li>Group</li>
            </ul>
            <h3>Explore</h3>
            <ul>
              <li>Events</li>
              <li>Pages</li>
              <li>Groups</li>
              <li>Friend Lists</li>
              <li>Pokes</li>
              <li>Insights</li>
              <li>Games</li>
              <li>On This Day</li>
              <li>Fundraisers</li>
              <li>Live Video</li>
              <li>See More...</li>
            </ul>
            <h3>Create</h3>
            <ul>
              <li>Ad</li>
              <li>Page</li>
              <li>Group</li>
              <li>Event</li>
              <li>Fundraiser</li>
            </ul>
          </div>
          <div className="newsfeed">
            <div className="panel">
              <ul>
                <li>Create Post</li>
                <li>Photo/Video Album</li>
                <li>Live Video</li>
              </ul>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <ul>
                <li>Photo/Video</li>
                <li>Feeling/Activity</li>
                <li>...</li>
              </ul>
            </div>
            <div className="panel">
              <img src="" alt="Profile pic"/>
              <h2>Jane Doe updated her cover photo.</h2>
              <small>4 hrs &middot; Public</small>
              <h3>Text goes here</h3>
              <img src="" alt="New cover photo"/>
              <ul>
                <li>Like</li>
                <li>Comment</li>
                <li>Share</li>
              </ul>
              <img src="" alt="Likes"/>
              <small>200</small>
              <div className="comment">

              </div>
            </div>
          </div>
          <div className="right-sidebar">
            <div className="panel">
              <h3>Ticker</h3>
            </div>
            <div className="panel trending">
              <h3>Trending</h3>
              <ul>
                <li>Yo what happened here</li>
                <li>LOLOLOLOLOL</li>
                <li>Come on, need more stories</li>
                <li className="see-more">See More</li>
              </ul>
            </div>
            <div className="panel"></div>
            <div className="panel language">
              <div className="plus">+</div>
              <ul>
                <li className="default-language">English (US)</li>
                <li>Dutch</li>
                <li>Dutch</li>
                <li>Dutch</li>
                <li>Dutch</li>
                <li>Spanish</li>
                <li>Chinese</li>
                <li>Dutch</li>
              </ul>
            </div>
            <ul className="footer">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Advertising</li>
              <li>Ad Choices</li>
              <li>Cookies</li>
              <li>More</li>
            </ul>
            <ul className="footer">
              <li>Facebook Copyright 2017</li>
            </ul>
          </div>
        </div>
        <div className="chatbar">
          <h3>Chat (Off)</h3>
        </div>
      </section>
    );
  }
}

export default Facebook;
