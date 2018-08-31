import React from 'react';
import './Keyboard.css';

const Keyboard = (props) => {
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  
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
        {characters}
    </div>
  )
}

export default Keyboard;