import React from 'react';
import { shallow } from 'enzyme';
import ImageSlideshow from '../ImageSlideshow';
import renderer from 'react-test-renderer';

describe('ImageSlideshow', () => {

  const wrapper = shallow(<ImageSlideshow />);

  it('renders without crashing', () => {
    shallow(<ImageSlideshow />);
  });

  it('renders one image', () => {
    const slide = wrapper.find('Slide')
    expect(slide.length).toEqual(1)
  });

  describe('Textbox', () => {

    const textbox = wrapper.find('.search-container')

    it('renders a textbox', () => {
      expect(textbox.find('input').length).toBe(1)
    })

  });

  describe('Buttons', () => {

    const buttonContainer = wrapper.find('.button-container')

    it('renders with three buttons', () => {
      expect(buttonContainer.find('input').length).toBe(3)
    });

  });

});
