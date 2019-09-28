import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
const diveTwice = sw => sw.dive().dive();
import Input from './Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = diveTwice(shallow(<Input store={store} />));
  console.log(wrapper.debug());
  return wrapper;
};

setup();
describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error ', () => {});

    test('renders input box', () => {});

    test('renders submit button', () => {});
  });

  describe('word has been guessed', () => {});
});

describe('update state', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { success: false };
    wrapper = setup(initialState);
  });
  test('renders component without error ', () => {
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
  });

  test('does NOT render input box', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    expect(inputBox.length).toBe(1);
  });

  test('does NOT render submit button', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.length).toBe(1);
  });
});
