import './App.css';

import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import FullPhoto from './FullPhoto';
import PhotoList from './PhotoList';
import SearchForm from './SearchForm';

export default class App extends PureComponent {

  render() {
    const { searchTerm, photos, currentPhoto, search, focusPhoto } = this.props;

    const photoList = photos.length > 0 &&
      <PhotoList title={searchTerm} photos={photos} onFocusPhoto={focusPhoto} />;
    const fullPhoto = currentPhoto &&
      <FullPhoto photo={currentPhoto} />;

    return (
      <main className="App">
        <header className="App-searchform">
          <SearchForm onSearch={search} />
        </header>
        <section className="App-photolist">
          {photoList}
        </section>
        <section className="App-fullphoto">
          {fullPhoto}
        </section>
        <footer class="App-footer">
          <p>
            <small>
              This non-commercial example application uses the Flickr API but is not endorsed or certified by Flickr Inc. or SmugMug, Inc. See the <a href="https://www.flickr.com/help/terms/api">Flickr API Terms of Use</a>.
            </small>
          </p>
        </footer>
      </main>
    );
  }
}

App.propTypes = {
  // Props from the store
  searchTerm: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired,
  currentPhoto: PropTypes.object,
  // Action creators
  search: PropTypes.func.isRequired,
  focusPhoto: PropTypes.func.isRequired
};
