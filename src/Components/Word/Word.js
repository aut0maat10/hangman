import React from 'react';
import './Word.css';

const Word = props => {
  
  let letterArr = props.randomWord.split('');s
  let guess = letterArr.map(letter => <li> _ </li>)

  return (
    <div className="wordWrapper">
      <h2>{props.randomWord}</h2>
      <ul>
        {guess}
      </ul>
      <button className="wordBtn" onClick={props.getRandomWord}>New Word</button>
    </div>
  )
}

export default Word; 