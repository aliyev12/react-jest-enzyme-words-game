import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import App, { UnconnectedApp } from './App';
import { findByTestAttr } from '../test/testUtils';

const setupWithMockStore = (initialState = {}) => {
  const mockStore = configureMockStore();
  const store = mockStore(initialState);
  const wrapper = shallow(<App store={store} />).dive();
  return wrapper;
};

describe('<App />', () => {
  test('renders component without error', () => {
    const wrapper = setupWithMockStore();
    const component = findByTestAttr(wrapper, 'app-component');
  });

  test('has access to `success` state', () => {
    const success = true;
    const wrapper = setupWithMockStore({ success });
    const successProp = wrapper.prop('success');
    expect(successProp).toBe(success);
  });

  test('has access to `secretWord` state', () => {
    const secretWord = 'party';
    const wrapper = setupWithMockStore({ secretWord });
    const secretWordProp = wrapper.prop('secretWord');
    expect(secretWordProp).toBe(secretWord);
  });

  test('has access to `guessedWords` state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setupWithMockStore({ guessedWords });
    const guessWordsProp = wrapper.prop('guessedWords');
    expect(guessWordsProp).toEqual(guessedWords);
  });

  test('`getSecretWord` action creator is a function on the props', () => {
    const wrapper = setupWithMockStore();
    const getSecretWordProp = wrapper.prop('getSecretWord');
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});
