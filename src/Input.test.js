import Input from './Input';
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';

const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />);
};
test('renders', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(Input, { secretWord: 'patry' });
});

describe('state controlled input field', () => {
  let mockSetCurrentGuess = jest.fn();
    let wrapper;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup();
  });

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const value = 'train';
    const mockEvent = { target: { value } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith(value);
  });

  test('field is cleared upon submit button click', () => {
    React.useState = jest.fn(() => ['some value', mockSetCurrentGuess]);
    const form = findByTestAttr(wrapper, 'form');
    const mockEvent = { preventDefault: jest.fn() };
    form.simulate('submit', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
