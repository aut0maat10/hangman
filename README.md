# React Hangman

#### Hangman is a word guessing game built with ReactJS. 
Check it out on [Heroku](https://limitless-beyond-28378.herokuapp.com/)

![Hangman App Screenshot](https://i.imgur.com/GFPrroj.png)

## Basic Structure of App:

### Components:
* Hangman.js: all state and methods to handle user interactions are stored here. State is passed to other components as props. TODO: refactor and clean up methods
* Word.js: Responsible for displaying the word to guess, incorrect guess count, new game button, guesses left. TODO: split into multiple separate components.
* Keyboard.js: Displays an alphabet keyboard where the user can enter guesses

##TODOS:

* Refactor handleGuesses method into multiple, separate methods in Hangman.js 
* Break out New Game - button to separate component
* Refactor and split into separate components, methods, functions where possible
* Add hangman illustration for wrong guesses
* Add responsiveness for long words
* Add styling – check fonts, colors...

## Ideas
* Allow user to change background color
* Allow user to choose difficulty level
# Allow user to use computer keyboard to enter guesses
# Highlight guessed keys/correct keys on keyboard


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

