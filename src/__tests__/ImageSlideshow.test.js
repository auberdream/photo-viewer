import React from 'react';
import { shallow } from 'enzyme';
import ImageSlideshow from '../ImageSlideshow';

it('renders without crashing', () => {
  shallow(<ImageSlideshow />);
})
