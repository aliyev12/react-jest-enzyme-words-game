import React from 'react';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>Words Game</h1>
      <ErrorBoundary>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
        />
      </ErrorBoundary>
    </div>
  );
};

export default App;
