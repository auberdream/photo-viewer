import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from '../SearchResults';

describe('SearchResults', () => {

  const dummyCurrentSearch = [
                                {
                                  "id": 1,
                                  "first_name": "Alan",
                                  "last_name": "Berryhill",
                                  "url": "http://fakeyfake.com"
                                },
                                {
                                  "id": 2,
                                  "first_name": "Allyson",
                                  "last_name": "Brar",
                                  "url": "http://www.noodles.com"
                                },
                                {
                                  "id": 3,
                                  "first_name": "Alvera",
                                  "last_name": "Tinker",
                                  "url": "http://fakeurl.com"
                                }
                              ]
  const wrapper = shallow(<SearchResults currentSearch={ dummyCurrentSearch } handler={Function} />)

  it('renders the images', () => {
    const images = wrapper.find('img');
    expect(images.length).toEqual(3)
  })

  it('renders the names of the photographers', () => {
    const firstName = wrapper.find('span').at(0)
    const secondName = wrapper.find('span').at(1)
    const thirdName = wrapper.find('span').at(2)
    expect(firstName.text()).toEqual('Alan Berryhill')
    expect(secondName.text()).toEqual('Allyson Brar')
    expect(thirdName.text()).toEqual('Alvera Tinker')
  })

})
