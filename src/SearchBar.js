import React, { Component } from 'react';
import Images from './resources/images';

class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar-container">
        <input type="textbox" placeholder="What are you looking for?" />
      </div>
    )
  }
}

export default SearchBar;
