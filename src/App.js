import React, { Component } from 'react';
import FlipCoin from './FlipCoin';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlipCoin
          headCoin="https://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg"
          tailCoin="https://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg"
        />
      </div>
    );
  }
}

export default App;
