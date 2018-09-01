import React from 'react';
import './Keyboard.css';

const Keyboard = (props) => {
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const newGame = props.newGame;
  let characters = alphabet.map(character => (
    <div 
      className="keyBorder" 
      key={character}
      onClick={props.handleGuesses}
      >
      {character}
    </div>
    )
  );

  return (
    <div className="keyContainer">
        {newGame ? characters : null}
    </div>
  )
}

export default Keyboard;