import React, { Component } from 'react';

class ImageSlideshow extends Component {
  render() {
    return (
      <div className="main-container">
        <ButtonControlBar />
        <Slide />
      </div>
    )
  }
}

export default ImageSlideshow;
