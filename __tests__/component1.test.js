import * as React from 'react';
import { Component1 } from '../src';
import { render } from 'react-native-testing-library';

describe('Component1', () => {
  it('renders correctly', () => {
    const tree = render(<Component1 />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
