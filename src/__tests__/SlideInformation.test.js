import React from 'react';
import { shallow } from 'enzyme';
import SlideInformation from '../SlideInformation';

it('renders without crashing', () => {
  const dummyJSON = {"id": 1,
                     "first_name": "Alan",
                     "last_name": "Berryhill",
                     "date": "2018-04-17",
                     "tag": [
                       "person",
                       "outdoors"
                     ]}
  shallow(<SlideInformation slide={ dummyJSON } />);
})

it('renders three paragraphs', () => {
  const dummyJSON = {"id": 1,
                     "first_name": "Alan",
                     "last_name": "Berryhill",
                     "date": "2018-04-17",
                     "tag": [
                       "person",
                       "outdoors"
                     ]}
  const wrapper = shallow(<SlideInformation slide={ dummyJSON } />);
  expect(wrapper.find("p").length).toEqual(3)
})

it('renders the date of the photo', () => {
  const dummyJSON = {"id": 1,
                     "first_name": "Alan",
                     "last_name": "Berryhill",
                     "date": "2018-04-17",
                     "tag": [
                       "person",
                       "outdoors"
                     ]}
  const wrapper = shallow(<SlideInformation slide={ dummyJSON } />);
  const dateParagraph = wrapper.find("p").at(0)
  const date = "2018-04-17"
  expect(dateParagraph.contains(date)).toEqual(true)
})

it("renders the artist's first and last name", () => {
  const dummyJSON = {"id": 1,
                     "first_name": "Alan",
                     "last_name": "Berryhill",
                     "date": "2018-04-17",
                     "tag": [
                       "person",
                       "outdoors"
                     ]}
  const wrapper = shallow(<SlideInformation slide={ dummyJSON } />);
  const nameParagraph = wrapper.find("p").at(1);
  const name = "Alan Berryhill";
  expect(nameParagraph.contains(name)).toEqual(true);
})

it('renders the tags of the photo', () => {
  const dummyJSON = {"id": 1,
                     "first_name": "Alan",
                     "last_name": "Berryhill",
                     "date": "2018-04-17",
                     "tag": [
                       "person",
                       "outdoors"
                     ]}
  const wrapper = shallow(<SlideInformation slide={ dummyJSON } />);
  const tagParagraph = wrapper.find("p").at(2);
  const tags = tagParagraph.find("span");
  console.log(tags.at(0))
  expect(tags.at(0).contains(" person")).toEqual(true);
  expect(tags.at(1).contains(" outdoors")).toEqual(true);
})
