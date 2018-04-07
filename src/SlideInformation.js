import React, { Component } from 'react';
import Styles from './resources/styles/slide-information.css';

const SlideInformation = props => (
      <div className="slide-information">
        <div className="information-container">
          <p className="photo-date">
            { props.slide.date }
          </p>
          <p className="photographer-name">
            { props.slide.first_name + ' ' + props.slide.last_name }
          </p>
          <p className="photo-tags">
            { 'Tags: ' + props.slide.tag.join(", ") }
          </p>
        </div>
      </div>
)

export default SlideInformation;
