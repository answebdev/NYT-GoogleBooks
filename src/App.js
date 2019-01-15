import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            NYT Google Books Search
          </h1>
          <p>
            See activity 11, 20-react folder for reference
          </p>
        </header>
      </div>
    );
  }
}

export default App;
