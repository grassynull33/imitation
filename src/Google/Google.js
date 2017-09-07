import React, { Component } from 'react';

// CSS goes here
import './Google.css';

// COMPONENTS go here
import logo from './googlelogo_color_272x92dp.png';

class Google extends Component {
  render() {
    return (
      <section className="Google">
        <header>
          <ul>
            <li>Gmail</li>
            <li>Images</li>
            <li>Apps</li>
            <li>Notifications</li>
            <li>
              <div className="profile-pic">
              </div>
            </li>
          </ul>
        </header>
        <div className="main">
          <div className="search-container">
            <img src={logo} alt="Google"/>
            <input className="input-search" type="text"/>
            <div className="btn-row">
              <button>Google Search</button>
              <button>I'm Feeling Lucky</button>
            </div>
          </div>
        </div>
        <footer>
          <ul className="left-footer">
            <li>Advertising</li>
            <li>Business</li>
            <li>About</li>
          </ul>
          <ul className="right-footer">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Settings</li>
          </ul>
        </footer>
      </section>
    );
  }
}

export default Google;
