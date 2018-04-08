import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  shallow(<App />);
})

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
