import React, { Component } from 'react';

// CSS goes here
import './Wikipedia.css';

// COMPONENTS go here

class Wikipedia extends Component {
  render() {
    return (
      <section className="Wikipedia">
        <div className="sidebar">
          <img src="" alt="Wikipedia"/>
          <ul>
            <li>Main page</li>
            <li>Contents</li>
            <li>Featured content</li>
            <li>Current events</li>
            <li>Random article</li>
            <li>Donate to Wikipedia</li>
            <li>Wikipedia store</li>
          </ul>
          <h6>Interaction</h6>
          <ul>
            <li>Help</li>
            <li>About Wikipedia</li>
            <li>Community portal</li>
            <li>Recent changes</li>
            <li>Contact page</li>
          </ul>
          <h6>Tools</h6>
          <ul>
            <li>What links here</li>
            <li>Related changes</li>
            <li>Upload file</li>
            <li>Special pages</li>
            <li>Permanent link</li>
            <li>Page information</li>
            <li>Wikidata item</li>
          </ul>
        </div>
        <main>
          Main
        </main>
      </section>
    );
  }
}

export default Wikipedia;
