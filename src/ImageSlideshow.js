import React, { Component } from 'react';
import Slide from './Slide';
import Images from './resources/images';

class ImageSlideshow extends Component {
  constructor() {
    super();
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
    const nextSlide = this.state.currentSlide + increment;
    this.setState({
      currentSlide: nextSlide
    });
  };

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
        <Slide slide={ this.retrieveSlide() } />
        <div className="button-container">
          <input type="button" onClick={ this.handleClick } name='-1' value="<" />
          <input type="button" onClick={ this.shuffle } value="X" />
          <input type="button" onClick={ this.handleClick } name='1' value=">" />
        </div>
      </div>
    )
  };
};

export default ImageSlideshow;
