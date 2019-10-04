import Input from './Input';
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';

describe('<Input/>', () => {
  const setup = () => {
    return shallow(<Input />);
  };
  test('renders', () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'component-input');
    expect(inputComponent.length).toBe(1);
  });
});
