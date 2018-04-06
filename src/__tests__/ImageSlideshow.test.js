import React from 'react';
import { shallow } from 'enzyme';
import ImageSlideshow from '../ImageSlideshow';
import renderer from 'react-test-renderer';

describe('ImageSlideshow', () => {

  const wrapper = shallow(<ImageSlideshow />);

  it('renders without crashing', () => {
    shallow(<ImageSlideshow />);
  })

  it('renders one image', () => {
    const slide = wrapper.find('Slide')
    expect(slide.length).toEqual(1)
  })

  it('renders with three buttons', () => {
    expect(wrapper.find('input').length).toBe(3)
  })

});
