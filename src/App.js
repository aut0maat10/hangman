import React, { Component } from 'react';
import './App.css';
import Hangman from './Components/Hangman'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Hello World</h3>
        <Hangman/>
      </div>
    );
  }
}

export default App;
