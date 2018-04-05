import React, { Component } from 'react';

const SlideInformation = props => (
      <div className="slide-information">
        <div className="information-container">
          <p className="photo-date">
            { props.slide.date }
          </p>
          <p className="artist-name">
            { props.slide.first_name + ' ' + props.slide.last_name }
          </p>
          <p className="photo-tags">Tags:
            { props.slide.tag.map((item, key) =>
              <span key={ key }>
                { ' ' + item }
              </span>)
            }
          </p>
        </div>
      </div>
)

export default SlideInformation;
