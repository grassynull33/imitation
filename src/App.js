import React, { Component } from 'react';

// CSS goes here
import './reset.css';
import './App.css';

// COMPONENTS go here
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Facebook from './Facebook/Facebook';
import Google from './Google/Google';
import Amazon from './Amazon/Amazon';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li><Link to="/Facebook">Facebook</Link></li>
                <li><Link to="/Google">Google</Link></li>
                <li><Link to="/Amazon">Amazon</Link></li>
              </ul>
            </nav>
          </header>

          <div className="site-content">
            <Route path="/Facebook" component={Facebook}/>
            <Route path="/Google" component={Google}/>
            <Route path="/Amazon" component={Amazon}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
