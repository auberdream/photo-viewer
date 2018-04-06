import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Slide from '../Slide';

describe('Slide', () => {

  const dummyJSON = {"id": 1,
                     "first_name": "Alan",
                     "last_name": "Berryhill",
                     "date": "2018-04-17",
                     "tag": [
                       "person",
                       "outdoors"
                     ],
                     "url": "https://www.imasecuresite.com"}
  const wrapper = shallow(<Slide slide={dummyJSON} />)

  it('renders without crashing', () => {
    shallow(<Slide slide={dummyJSON}/>);
  })

  it('renders the url of the image', () => {
    const image = <img src="https://www.imasecuresite.com" />
    expect(wrapper.contains(image)).toEqual(true)
  })

});
