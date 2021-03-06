import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is)
 */

const Congrats = props => {
  if (props.success) {
    return (
      <div data-testid="component-congrats" className="alert alert-success">
        <span data-testid="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-testid="component-congrats"></div>;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
