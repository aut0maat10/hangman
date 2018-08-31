import React from 'react';
import './Word.css';

const Word = props => {
  
  let blankLetters = props.blankLetters.map((letter, i) => (
    <li key={i}>{` ${letter} `}</li>
  ));
  
  let guesses = props.guessedLetters;
  
  return (
    <div className="wordWrapper">
      <h2>{props.randomWord}</h2>
      {guesses}
      <ul>
        {blankLetters}
      </ul>
      <button className="wordBtn" onClick={props.getRandomWord}>New Game</button>
    </div>
  )
}

export default Word; 