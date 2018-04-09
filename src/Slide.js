import React from 'react';
import SlideInformation from './SlideInformation'
import Styles from './resources/styles/slide.css'

const Slide = props => (
  <div className="slide">
    <img src={ props.slide.url } />
    <SlideInformation slide={ props.slide } />
  </div>
);


export default Slide;
