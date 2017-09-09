import React, { Component } from 'react';

// CSS goes here
import './Amazon.css';

// COMPONENTS go here

class Amazon extends Component {
  render() {
    return (
      <section className="Amazon">
        <div className="intro-ad">
          <h2>New &amp; Interesting Finds on Amazon</h2>
          <button>Explore</button>
        </div>

        <header>
          <div className="top-header">
            <img src="" alt="Amazon" className="logo"/>
            <form action="">
              <input type="text"/>
              <input type="submit"/>
            </form>
          </div>
          <div className="bot-header">
            <nav>
              <ul className="dept">
                <li>Departments</li>
              </ul>
              <ul className="your-amazon">
                <li>Your Amazon.com</li>
                <li>Today's Deals</li>
                <li>Gift Cards &amp; Registry</li>
                <li>Sell</li>
                <li>Help</li>
              </ul>
              <ul>
                <li>Language</li>
                <li>Accounts &amp; Lists</li>
                <li>Orders</li>
                <li>Try Prime</li>
                <li>Cart</li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="carousel">

        </div>

        <main>
          <div className="panel">
            <div className="top-subpanel">
              <h3>Welcome</h3>
              <p>Sign in for the best experience</p>
              <button>Sign in securely</button>
            </div>
            <div className="bot-subpanel">
              <hr/>
              <p>New to Amazon? <a href="">Start here</a></p>
            </div>
          </div>
          <div className="panel">
            <div className="top-subpanel">
              <h4>The dress shop</h4>
              <img src="" alt="Girl"/>
            </div>
            <div className="bot-subpanel">
              <hr/>
              <p><a href="">Shop women's dresses</a></p>
            </div>
          </div>
          <div className="panel">
            <div className="top-subpanel">
              <h4>AmazonBasics</h4>
              <div className="grid">
                <div className="category">
                  <img src="" alt="Category"/>
                  <p>Category</p>
                </div>
                <div className="category">
                  <img src="" alt="Category"/>
                  <p>Category</p>
                </div>
                <div className="category">
                  <img src="" alt="Category"/>
                  <p>Category</p>
                </div>
                <div className="category">
                  <img src="" alt="Category"/>
                  <p>Category</p>
                </div>
              </div>
            </div>
            <div className="bot-subpanel">
              <hr/>
              <p><a href="">Explore all AmazonBasics</a></p>
            </div>
          </div>
          <div className="panel">
            <h4>Deal of the day</h4>
            <h5>$4.00</h5>
            <small>List: $19.95 (80% off)</small>
            <p><a href="">Shop all deals</a></p>
          </div>
        </main>
        <footer>
          <div className="back-top">
            <p><a href="">Back to top</a></p>
          </div>
          <main>
            <div className="col">
              <h5>Get to Know Us</h5>
              <ul>
                <li>Sell on Amazon</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="col">
              <h5>Get to Know Us</h5>
              <ul>
                <li>Sell on Amazon</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="col">
              <h5>Get to Know Us</h5>
              <ul>
                <li>Sell on Amazon</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="col">
              <h5>Get to Know Us</h5>
              <ul>
                <li>Sell on Amazon</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </main>
          <hr/>
          <div className="select">
            <img src="" alt="Amazon"/>
            <select name="Language" id="">
              <option value="English">English</option>
            </select>
            <select name="Country" id="">
              <option value="US">United States</option>
            </select>
          </div>
          <div className="directory">
            <h2>Directory</h2>
          </div>
          <div className="copyright">
            <ul>
              <li>Conditions of Use</li>
              <li>Privacy Notice</li>
              <li>Interest-Based Ads</li>
            </ul>
            <small>&copy; 1996-2017, Amazon.com, Inc. or its affiliates</small>
          </div>
        </footer>
      </section>
    );
  }
}

export default Amazon;
