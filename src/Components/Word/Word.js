import React from 'react';

const Word = props => {
  console.log(props)
  return (
    <div>
      <h3>{props.randomWord}</h3>
      <button onClick={props.getRandomWord}>New Word</button>
    </div>
  )
}

export default Word; 