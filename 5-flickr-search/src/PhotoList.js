import React, { PureComponent, PropTypes } from 'react';
import PhotoItem from './PhotoItem';
import './PhotoList.css';

export default class PhotoList extends PureComponent {

  render() {
    const { title, photos, onFocusPhoto } = this.props;
    const items = photos.map((photo) =>
      <PhotoItem key={photo.media.m} photo={photo}
        onFocusPhoto={onFocusPhoto} />
    );
    return (
      <div className='PhotoList'>
        <h1>{title}</h1>
        <ul className='PhotoList-ul'>
          {items}
        </ul>
      </div>
    );
  }

}

PhotoList.propTypes = {
  title: PropTypes.string,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onFocusPhoto: PropTypes.func.isRequired
};
