import React from 'react';
import { shallow } from 'enzyme';
import SlideInformation from '../SlideInformation';
import renderer from 'react-test-renderer';

describe('SlideInformation', () => {

  const dummyJSON = {"id": 1,
                     "first_name": "Alan",
                     "last_name": "Berryhill",
                     "date": "2018-04-17",
                     "tag": [
                       "person",
                       "outdoors"
                     ]}

  const wrapper = shallow(<SlideInformation slide={ dummyJSON } />);


  it('renders without crashing', () => {
    shallow(<SlideInformation slide={ dummyJSON } />);
  });

  it('renders three paragraphs', () => {
    expect(wrapper.find("p").length).toEqual(3)
  });

  it('renders the date of the photo', () => {
    const dateParagraph = wrapper.find("p").at(0)
    const date = "2018-04-17"
    expect(dateParagraph.contains(date)).toEqual(true)
  });

  it("renders the artist's first and last name", () => {
    const nameParagraph = wrapper.find("p").at(1);
    const name = "Alan Berryhill";
    expect(nameParagraph.contains(name)).toEqual(true);
  });

  it('renders the tags of the photo', () => {
    const tagParagraph = wrapper.find("p").at(2);
    expect(tagParagraph.contains("Tags: person, outdoors")).toEqual(true);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<SlideInformation slide={ dummyJSON } />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
