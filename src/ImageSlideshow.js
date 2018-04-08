import React, { Component } from 'react';
import Slide from './Slide';
import Images from './resources/images';
import SearchBar from './SearchBar';
import Styles from './resources/styles/imageslideshow.css';

class ImageSlideshow extends Component {
  constructor() {
    super();
    this.handler = this.handler.bind(this)
    this.state = {
      currentSlide: 1
    };
  };

  retrieveSlide = () => {
    const context = this;
    const found = Images.find(function(element) {
      return element.id === context.state.currentSlide
    });
    return found;
  };

  handleClick = (event) => {
    const increment = parseInt(event.target.name, 10);
    const nextSlide = this.getNextSlide(increment);
    this.setState({
      currentSlide: nextSlide
    });
  };

  getNextSlide = (increment) => {
    if (this.state.currentSlide + increment === 0 ) {
      return Images.length
    } else if (this.state.currentSlide + increment === 99) {
      return Images[0].id
    };
    
    return this.state.currentSlide + increment
  }

  handler = (value) => {
    this.setState({
      currentSlide: value
    })
  }

  randomNumber = () => {
    return Math.floor(Math.random() * (Images.length -1));
  };

  shuffle = () => {
    this.setState({
      currentSlide: this.randomNumber()
    });
  };

  render() {
    return (
      <div className="main-container">
        <nav>
          <SearchBar handler={ this.handler } />
          <div className="button-container">
            <input type="button" onClick={ this.handleClick } name='-1' value="<" />
            <input id="shuffle" type="button" onClick={ this.shuffle } value="S" />
            <input type="button" onClick={ this.handleClick } name='1' value=">" />
          </div>
        </nav>
        <Slide slide={ this.retrieveSlide() } />
      </div>
    )
  };
};

export default ImageSlideshow;
