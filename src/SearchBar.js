import React, { Component } from 'react';
import Images from './resources/images';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      currentSearch: "",
      foundImages: null
    };
  };

  handleChange = (event) => {
    let searchTerm = event.target.value
    this.setState({
      currentSearch: searchTerm
    }, this.findImages(searchTerm));
  }

  findImages = (searchTerm) => {
    const found = Images.filter(image => image.first_name.includes(searchTerm) ||
                                       image.last_name.includes(searchTerm) ||
                                       image.tag.includes(searchTerm));
    this.setState({
      foundImages: found
    })
  }

  render() {
    return (
      <div className="searchbar-container">
        <input type="textbox" onChange={ this.handleChange } placeholder="What are you looking for?" />
      </div>
    )
  }
}

export default SearchBar;
