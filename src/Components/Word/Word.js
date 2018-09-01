import React from 'react';
import './Word.css';

const Word = props => {
  
  const { wrongGuesses, newGame, wrongGuessCount, randomWord, blankLetters, correctGuesses } = props;
  // render correct answer in ul list
  const correctAnswer = randomWord.split('').map((letter, i) => (
    <li key={i}>{` ${letter} `}</li>
  ));
  // render blank letters/underscores
  let blankLetterSequence = blankLetters.map((letter, i) => (
    <li key={i}>{` ${letter} `}</li>
  ));

  let wrongGuessesList = wrongGuesses.map(guess => (
    <p className="wrongGuessList">{guess.toUpperCase()}, </p>
  ))
  // render wrong guess count
  const guessCount = (
    <div>
      <h3 className="wrongGuesses">Wrong Guesses: <strong>{wrongGuessesList}</strong></h3>
    </div>
  );
  const winner = <div>
      <h2>
        You Win! <span role="img" aria-label="smiling emoji with sunglasses">&#x1F60E;</span>
      </h2>
    </div>;

  return <div className="wordWrapper">
      <div>
        {newGame ? guessCount : <h2>Press Button To Play!</h2>}
      </div>
      <div>
        {wrongGuessCount > 0 ? (
          <ul>{blankLetterSequence}</ul>
        ) : (
          <ul>{correctAnswer}</ul>
        )}
      </div>
      <div>{correctGuesses.length === correctAnswer.length ? winner : null}</div>
      <button className="wordBtn" onClick={props.getRandomWord}>
        New Game
      </button>
    </div>;
}

export default Word; 