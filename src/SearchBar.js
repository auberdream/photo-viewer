import React, { Component } from 'react';
import Images from './resources/images';
import SearchResults from './SearchResults'
import Styles from './resources/styles/searchbar.css'

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      currentSearch: "",
      foundImages: null
    };
  };

  handleChange = (event) => {
    let searchTerm = event.target.value;
    this.setState({
      currentSearch: searchTerm
    }, this.findImages(searchTerm));
  };

  findImages = (searchTerm) => {
    let found = Images.filter(image => image.first_name.includes(searchTerm) ||
                                       image.last_name.includes(searchTerm) ||
                                       image.tag.includes(searchTerm));
    this.setState({
      foundImages: found
    });
  };

  getImages = () => {
    if (this.isNotEmptySearch()) {
      return this.state.foundImages.slice(0, 3)
    };
    return [];
  };

  isNotEmptySearch = () => {
    return this.state.currentSearch !== "";
  };

  render() {
    return (
      <div className="searchbar-container">
        <div className="fake-textbox">
          <img className="magnifying-glass" src="./images/magnifying-glass.png" />
          <input className="textbox" type="textbox" onChange={ this.handleChange } placeholder="What are you looking for?" />
        </div>
        <SearchResults handler={ this.props.handler } currentSearch={ this.getImages() } />
      </div>
    );
  };
};

export default SearchBar;
