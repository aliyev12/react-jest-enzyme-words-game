import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {
  const [ currectGuess, setCurrentGuess ] = React.useState('');

  return (
    <div data-testid="component-input">
      <form 
      data-testid="form"
      className="form-inline" 
      onSubmit={e => {
        e.preventDefault();
        setCurrentGuess('');
      }}
      >
        <input
          data-testid="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={currectGuess}
          onChange={e => setCurrentGuess(e.target.value)}
        />
        <button
          data-testid="submit-button"
          className="submit-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
};

export default Input;
