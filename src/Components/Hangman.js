import React from 'react';
import Word from './Word/Word';
import Keyboard from './Keyboard/Keyboard'

export default class Hangman extends React.Component {
  constructor() {
    super();
    this.state = {
      words: [],
      guessedLetters: [],
      guessCount: 0,
      randomWord: 'Hit New Game to Play!',
      blankLetters: []
      //correctlyGuessed: []
    }
    this.handleGuesses = this.handleGuesses.bind(this); 
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
    let blankLetters = Array(random.length).fill('_');
    this.setState({ 
      randomWord: random, 
      guessedLetters: [], 
      blankLetters: blankLetters
    });
  }

  handleGuesses = (e) => {
    //
    let guess = e.target.innerHTML;
    // e.target.style.border = '2px solid lightpink';
    // e.target.style.background = 'lightpink';
    if (this.state.guessedLetters.includes(guess)) return;
    this.setState({
      guessedLetters: [...this.state.guessedLetters, guess]
    });
    // compare guessed letters to word
    let correctLetters = this.state.randomWord.split('');
    let resultArr = this.state.blankLetters;
    if (correctLetters.includes(guess)) {
      for (let i = 0; i < correctLetters.length; i++) {
        if (correctLetters[i] === guess) {
          resultArr[i] = guess;
        } 
      }
      this.setState({ blankLetters: resultArr })
    }
    // let correctlyGuessedLetters = this.state.guessedLetters.map((letter) => {
    //   if(correctLetters.includes(letter)) {
    //     this.setState({ correctlyGuessed: [...this.state.correctlyGuessed, correctlyGuessedLetters]})
    //   }
    // });
  }

  render() {
    return (
      <div>
        <h1>Hangman</h1>
        <div className="appContainer">
          <Word 
            randomWord={this.state.randomWord}
            getRandomWord={this.getRandomWord} 
            guessedLetters={this.state.guessedLetters}
            blankLetters={this.state.blankLetters}
            // correctLetters
          />
          <Keyboard handleGuesses={this.handleGuesses}/>
        </div>
      </div>
    )
  }
}