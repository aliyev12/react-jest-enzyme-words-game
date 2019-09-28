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
  test('renders component without error ', () => {});

  test('does NOT render input box', () => {});

  test('does NOT render submit button', () => {});
});
