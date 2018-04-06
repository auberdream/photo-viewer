import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {

  const wrapper = shallow(<SearchBar />)

  it('renders without crashing', () => {
    shallow(<SearchBar />);
  });

  it('renders a text input', () => {
    expect(wrapper.find('input').length).toEqual(1)
  })

});
