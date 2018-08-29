import React from 'react';
import './Keyboard.css';

const Keyboard = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let characters = alphabet.map((character, i) => <div className="keyBorder">
      <p key={i}>{character}</p>
    </div>);
  return (
    <div className="keyContainer">
        {characters}
    </div>
  )
}

export default Keyboard;