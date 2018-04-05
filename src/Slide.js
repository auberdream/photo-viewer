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
    const nextSlide = this.state.currentSlide += parseInt(event.target.name);
    this.setState({
      currentSlide: nextSlide
    });
  }

  render() {
    return (
      <div className="slide">
        <img src={ this.retrieveSlide() } />
        <input type="button" onClick={ this.handleClick } name='-1' value="<" />
        <input type="button" onClick={ this.handleClick } name='1' value=">" />
      </div>
    )
  }
}

export default Slide;
