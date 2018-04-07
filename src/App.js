import React, { Component } from 'react';
import ImageSlideshow from './ImageSlideshow';
import Styles from './resources/styles/app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <ImageSlideshow />
      </div>
    )
  }
}

export default App;
