import React, { Component } from 'react';
import { connect } from 'react-redux';

const Input = ({ success }) => {
  const contents = success ? null : (
    <form className="form-inline">
      <input
        data-testid="input-box"
        className="mb-2 mx-sm-3"
        type="text"
        placeholder="enter guess"
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

export default connect(mapStateToProps)(Input);
