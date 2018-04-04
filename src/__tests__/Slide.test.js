import React from 'react';
import { shallow } from 'enzyme';
import Slide from '../Slide';

it('renders without crashing', () => {
  shallow(<Slide />);
})
