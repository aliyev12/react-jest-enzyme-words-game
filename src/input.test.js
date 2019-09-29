import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { findByTestAttr, storeFactory } from '../test/testUtils';
const diveTwice = sw => sw.dive().dive();
import Input from './Input';

// Regular setup using actual redux - same as the one for development
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = diveTwice(shallow(<Input store={store} />));
  return wrapper;
};

// We use this setupWithMockStore when we use  redux-mock-store to test props from mapStateToProps
const setupWithMockStore = (initialState = {}) => {
  const mockStore = configureMockStore();
  const store = mockStore(initialState);
  const wrapper = shallow(<Input store={store} />).dive();
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test('renders component without error ', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });

    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });

    test('does not render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
  });
});

// To test props from mapStateToProps on functional components, we need to use redux-mock-store and therefore use a setupWithMockStore() as well
describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setupWithMockStore({ success });
    const successProp = wrapper.prop('success');
    expect(successProp).toBe(success);
  });

  test('`guessWord` action creator is a function prop', () => {
    const wrapper = setupWithMockStore();
    const guessWordProp = wrapper.prop('guessWord');
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});
