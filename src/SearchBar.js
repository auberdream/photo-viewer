import React, { Component } from 'react';
import Images from './resources/images';
import SearchResults from './SearchResults'

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

  getImages = () => {
    if (this.isNotEmpty()) {
      return this.state.foundImages
    };
    return []
  }

  isNotEmpty = () => {
    return this.state.currentSearch !== ""
  }

  render() {
    return (
      <div className="searchbar-container">
        <input type="textbox" onChange={ this.handleChange } placeholder="What are you looking for?" />
        <SearchResults handler={ this.props.handler } currentSearch={ this.getImages() } />
      </div>
    )
  }
}

export default SearchBar;