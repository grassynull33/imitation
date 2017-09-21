import React, { Component } from 'react';

// CSS goes here
import './YouTube.css';

// COMPONENTS go here

class YouTube extends Component {
  render() {
    return (
      <section className="YouTube">
        <header>
          <img src="" alt="Menu"/>
          <h1>YouTube</h1>
          <form action="">
            <input type="text" placeholder="Search"/>
            <input type="submit" value="Search"/>
          </form>
          <a href="">
            <img src="" alt="Upload"/>
          </a>
          <a href="">
            <img src="" alt="Grid"/>
          </a>
          <a href="">
            <img src="" alt="Notify"/>
          </a>
          <a href="">
            <img src="" alt="Profile"/>
          </a>
        </header>
        <main>
          
        </main>
      </section>
    );
  }
}

export default YouTube;
