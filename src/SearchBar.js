import React, { Component } from 'react';
import Images from './resources/images';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      currentSearch: ""
    };
  };

  handleChange = (event) => {
    let searchTerm = event.target.value
    this.setState({
      currentSearch: searchTerm
    });
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
