import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Let's hear it for Nerdery!
          This is hosted on AWS Elastic Beanstalk, deployed from a Ununtu VM on my Win 10 PC.
          Shout out to the gray beards learning new sh!t.
          
          Rm9yIENocmlzIGFuZCBNYXggYmVjYXVzZSB0aGVyZSBpcyBzb21lICdhcnQnIGluIHRoaXMgc2NpZW5jZS4KJ09rIEJvYic=
        </p>
      </div>
    );
  }
}

export default App;
