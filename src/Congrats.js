import React from 'react';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is)
 */

export default props => {
  if (props.success) {
    return (
      <div data-testid="component-congrats">
        <span data-testid="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return (
      <div data-testid="component-congrats"></div>
    )
  }
};
