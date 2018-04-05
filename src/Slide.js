import React, { Component } from 'react';
import Images from './resources/images'

class Slide extends Component {
  constructor() {
    super();
    this.state = {
      currentSlide: 1
    }
  }

  retrieveSlide = () => {
    const x = this
    const found = Images.find(function(element) {
      return element.id === x.state.currentSlide
    })
    return found.url
  }

  handleClick = (event) => {
    const increment = parseInt(event.target.name, 10)
    const nextSlide = this.state.currentSlide + increment;
    this.setState({
      currentSlide: nextSlide
    });
  }

  render() {
    return (
      <div className="slide">
        <img src={ this.retrieveSlide() } alt="Your browser does not support this image" />
        <input type="button" onClick={ this.handleClick } name='-1' value="<" />
        <input type="button" onClick={ this.handleClick } name='1' value=">" />
      </div>
    )
  }
}

export default Slide;
