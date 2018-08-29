import React from 'react';

export default class Hangman extends React.Component {
  constructor() {
    super();
    this.state = {
      words: []
    }
  }
  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/http://app.linkedin-reach.io/words")
      .then((res) => res.text())
      .then(text => {
        const data = text.split('\n');
        //console.log(data);
        this.setState({
          words: data
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    let randomWord = this.state.words[Math.floor(this.state.words.length * Math.random())]
    return <div>
        <p>Hello from the Hangman component!</p>
        <div>
          <h3>{randomWord}</h3>
        </div>
      </div>
  }
}