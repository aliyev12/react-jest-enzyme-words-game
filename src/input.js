import React, { useState } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

const Input = ({ success, guess }) => {
  const [input, setInput] = useState('');
  const contents = success ? null : (
    <form className="form-inline" onSubmit={e => {
      e.preventDefault();
    }}>
      <input
        data-testid="input-box"
        className="mb-2 mx-sm-3"
        type="text"
        placeholder="enter guess"
        onChange={e => setInput(e.target.value)}
        value={input}
      />
      <button data-testid="submit-button" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
  return <div data-testid="component-input">{contents}</div>;
};

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guess: guessWord })(Input);
