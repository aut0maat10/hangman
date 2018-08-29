import React from 'react';
import './Word.css';

const Word = props => {
  console.log(props)
  return (
    <div className="wordWrapper">
      <h3>{props.randomWord}</h3>
      <button onClick={props.getRandomWord}>New Word</button>
    </div>
  )
}

export default Word; 