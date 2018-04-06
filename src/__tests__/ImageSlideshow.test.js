import React from 'react';
import { shallow, mount } from 'enzyme';
import ImageSlideshow from '../ImageSlideshow';

const wrapper = shallow(<ImageSlideshow />)

it('renders without crashing', () => {
  shallow(<ImageSlideshow />);
})

it('renders with three buttons', () => {
  expect(wrapper.find('input').length).toBe(3)
})
