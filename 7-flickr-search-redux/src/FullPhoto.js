import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class FullPhoto extends PureComponent {

  render() {
    const { photo } = this.props;
    return (
      <div>
        <h2>{photo.title}</h2>
        <p>
          <img src={photo.media.m} alt='' className='FullPhoto-image' />
        </p>
        <p>Tags: {photo.tags}</p>
        <p>
          <a href={photo.link} target='_blank' rel="noopener noreferrer">
            {photo.link}
          </a>
        </p>
      </div>
    );
  }

}

FullPhoto.propTypes = {
  photo: PropTypes.object.isRequired
};
