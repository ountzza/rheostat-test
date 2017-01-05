import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Rheostat from 'rheostat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <Rheostat
            min={1}
            max={100}
            values={[1, 50, 100]}
          />
        </div>
      </div>
    );
  }
}

export default App;
