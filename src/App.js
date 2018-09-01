import React, { Component } from 'react';
import './App.css';
import Hangman from './Components/Hangman';

class App extends Component {
  render() {
    return <div className="App">
        <Hangman />
        <div className="footer">
          <p>Created with React </p>
          <img className="icon" src="/React-icon.svg" alt="" />
        </div>
      </div>;
  }
}

export default App;
