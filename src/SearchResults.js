import React, { Component } from 'react';
import Images from './resources/images';

class SearchResults extends Component {
  render() {
    return (
      <div className="searchresults-container">
        { this.props.currentSearch.map((item, index) =>
          <div className="search-result" key={ index } onClick={ () => this.props.handler(item.id) }>
            <img src={ item.url } />
            <span>{ item.first_name + " " + item.last_name }</span>
          </div>
        )}
      </div>
    )
  }
}

export default SearchResults;
