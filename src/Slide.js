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

  render() {
    return (
      <div className="slide">
        <img src={this.retrieveSlide()} />
      </div>
    )
  }
}

export default Slide;
