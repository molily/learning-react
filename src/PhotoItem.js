import React, { PureComponent, PropTypes } from 'react';
import './PhotoItem.css';

export default class PhotoItem extends PureComponent {

  constructor(props) {
    super(props);
    this.onFocusPhoto = this.onFocusPhoto.bind(this);
  }

  onFocusPhoto(event) {
    event.preventDefault();
    this.props.onFocusPhoto(this.props.photo);
  }

  render() {
    const { photo } = this.props;
    return (
      <li className='PhotoItem' onClick={this.onFocusPhoto}>
        <a href=''>
          <img src={photo.media.m} className='PhotoItem-image'/>
        </a>
      </li>
    );
  }

}

PhotoItem.propTypes = {
  photo: PropTypes.object.isRequired,
  onFocusPhoto: PropTypes.func.isRequired
};
