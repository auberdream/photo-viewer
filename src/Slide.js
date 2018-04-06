import React, { Component } from 'react';
import SlideInformation from './SlideInformation'

class Slide extends Component {
  render() {
    return (
      <div className="slide">
        <img src={ this.props.slide.url } />
        <SlideInformation slide={ this.props.slide } />
      </div>
    )
  }
}

export default Slide;
