import React from 'react';
import Word from './Word/Word';
import Keyboard from './Keyboard/Keyboard'

export default class Hangman extends React.Component {
  constructor() {
    super();
    this.state = {
      words: [],
      randomWord: 'placeholder'
    }
  }
  componentDidMount() {
    this.fetchWordsFromAPI(); 
  }

  fetchWordsFromAPI = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://app.linkedin-reach.io/words")
      .then(res => res.text())
      .then(text => {
        const data = text.split("\n");
        this.setState({ words: data });
      })
      .catch(err => console.log(err));
  }

  getRandomWord = () => {
    let random = this.state.words[Math.floor(this.state.words.length * Math.random())];
    this.setState({ randomWord: random });
  }

  render() {
    //let randomWord = this.state.words[Math.floor(this.state.words.length * Math.random())]
    return (
      <div>
        <h1>Hangman</h1>
        <div className="appContainer">
          <Word 
            randomWord={this.state.randomWord}
            getRandomWord={this.getRandomWord} 
          />
          <Keyboard />
        </div>
      </div>
    )
  }
}