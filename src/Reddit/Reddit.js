import React, { Component } from 'react';

// CSS goes here
import './Reddit.css';

// COMPONENTS go here

class Reddit extends Component {
  render() {
    return (
      <section className="Reddit">
        <div className="subreddits">
          <ul>
            <li>My Subreddits</li>
          </ul>
          <ul>
            <li>Popular</li>
            <li>All</li>
            <li>Random</li>
            <li>Users</li>
          </ul>
          <ul>
            <li>AskReddit</li>
            <li>Funny</li>
            <li>WorldNews</li>
            <li>Pics</li>
            <li>News</li>
            <li>TodayILearned</li>
            <li>Gaming</li>
            <li>Videos</li>
            <li>Aww</li>
            <li>Movies</li>
          </ul>
        </div>

        <header>
          <img src="" alt="reddit" className="logo"/>
          <ul>
            <li>hot</li>
            <li>new</li>
            <li>rising</li>
            <li>controversial</li>
            <li>top</li>
            <li>gilded</li>
            <li>wiki</li>
            <li>promoted</li>
          </ul>
          <div className="sign-in">
            <small>Want to join? Log in or sign up in seconds. | English</small>
          </div>
        </header>

        <main>
          <div className="left-bar">
            
          </div>
          <div className="main-posts">

          </div>
          <div className="right-bar">

          </div>
        </main>
      </section>
    );
  }
}

export default Reddit;
