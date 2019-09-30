import React from 'react';
import { connect } from 'react-redux';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './input';
import ErrorBoundary from './ErrorBoundary';
import { getSecretWord } from './actions';
import './App.css';

const App = ({ success, guessedWords }) => {
  return (
    <div className="container" data-testid="app-component">
      <h1>Words Game</h1>
      <ErrorBoundary>
        <Congrats success={success} />
        <Input secretWord={secretWord}/>
        <GuessedWords
          guessedWords={guessedWords}
        />
      </ErrorBoundary>
    </div>
  );
};

const mapStateToProps = ({ success, guessedWords, secretWord }) => ({
  success,
  guessedWords,
  secretWord
});

export default connect(mapStateToProps, { getSecretWord })(App);
