import React from 'react';
import Styles from './resources/styles/search-results.css';

const SearchResults = props =>(
  <div className="searchresults-container">
    { props.currentSearch.map((item, index) =>
      <div className="search-result" key={ index } onClick={ () => props.handler(item.id) }>
        <img className="search-img" src={ item.url } />
        <span>{ item.first_name + " " + item.last_name }</span>
      </div>
    )}
  </div>
);

export default SearchResults;
