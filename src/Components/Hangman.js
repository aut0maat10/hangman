import React from 'react';
import Word from './Word/Word';
import Keyboard from './Keyboard/Keyboard'

export default class Hangman extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      newGame: false, 
      words: [],
      guessedLetters: [],
      guessCount: 0,
      correctGuesses: [],
      wrongGuesses: [],
      wrongGuessCount: 6,
      randomWord: ' ',
      blankLetters: [],
    }
    this.handleGuesses = this.handleGuesses.bind(this); 
    this.getRandomWord = this.getRandomWord.bind(this);
  }
  async componentDidMount() {
    await this.fetchWordsFromAPI(); 
  }

  // fetch words and store in array,
  // set up cors-anywhere API on heroku at https://still-basin-71375.herokuapp.com
  fetchWordsFromAPI = () => {
    fetch("https://still-basin-71375.herokuapp.com/http://app.linkedin-reach.io/words?difficulty=1")
      .then(res => res.text())
      .then(text => {
        const data = text.split("\n");
        this.setState({ words: data, loading: false });
      })
      .catch(err => console.log(err));
  }
  // select random word from word array
  getRandomWord = () => {
    let random = this.state.words[Math.floor(this.state.words.length * Math.random())];
    let blankLetters = Array(random.length).fill("_");
    this.setState({ 
      newGame: true,
      randomWord: random, 
      guessedLetters: [], 
      wrongGuesses: [],
      blankLetters: blankLetters,
      wrongGuessCount: 6,
      correctGuesses: []
    });
  }
  // handle guesses on key click
  handleGuesses = (e) => {
    let guess = e.target.innerHTML;
    let correctLetters = this.state.randomWord.split('');

    if (this.state.guessedLetters.includes(guess)) return;
    if (this.state.wrongGuessCount < 1) {
      this.setState({
        blankLetters: correctLetters,
      });
      return;
    }

    this.setState({
      guessedLetters: [...this.state.guessedLetters, guess],
      correctGuesses: []
    });
    
    // compare guessed letters to word
    let resultArr = this.state.blankLetters;
    let correctGuesses;
    if (correctLetters.includes(guess) && this.state.wrongGuessCount > 0) {
      
      for (let i = 0; i < correctLetters.length; i++) {
        if (correctLetters[i] === guess) {
          resultArr[i] = guess;
          correctGuesses = resultArr.join('').replace(/_/g, '').split('');
        }
        this.setState({
          blankLetters: resultArr,
          correctGuesses: correctGuesses
        });
      }
    } else {
      this.setState({
        wrongGuessCount: this.state.wrongGuessCount - 1,
        wrongGuesses: [...this.state.wrongGuesses, guess],
      });
    }
}

  render() {
    const isLoading = this.state.loading;
    const newGame = this.state.newGame;
    const wrongGuessCount = this.state.wrongGuessCount;
    const gameState = wrongGuessCount > 0 ? <h3>
          {" "}
          You have {this.state.wrongGuessCount} guesses left! <span role="img" aria-label="smiling emoji">
            &#x1F603;
          </span>
        </h3> : <h2>
          You Lose... <span role="img" aria-label="sad emoji">
            &#x1F61E;
          </span>
        </h2>;
    if (isLoading) {
      return <div className="loader"></div>
    }
    
    return (
      <div>
        <h1 className="title">Hangman</h1>
        {newGame ? gameState : null}
        <div className="appContainer">
          <Word 
            randomWord={this.state.randomWord}
            getRandomWord={this.getRandomWord} 
            guessedLetters={this.state.guessedLetters}
            blankLetters={this.state.blankLetters}
            wrongGuesses={this.state.wrongGuesses}
            wrongGuessCount={this.state.wrongGuessCount}
            newGame={this.state.newGame}
            correctGuesses={this.state.correctGuesses}
          />
          <Keyboard 
            handleGuesses={this.handleGuesses}
            newGame={this.state.newGame}
          />
        </div>
      </div>
    )
  }
}