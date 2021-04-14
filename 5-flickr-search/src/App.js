import './App.css';

import React, { PureComponent } from 'react';

import jsonp from 'jsonp';

import FullPhoto from './FullPhoto';
import PhotoList from './PhotoList';
import SearchForm from './SearchForm';

export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      photos: [],
      currentPhoto: null
    };
    this.onSearch = this.onSearch.bind(this);
    this.onFocusPhoto = this.onFocusPhoto.bind(this);
  }

  onSearch(searchTerm) {
    // Make the JSONP request to Flickr
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const url = `http://api.flickr.com/services/feeds/photos_public.gne?tags=${encodedSearchTerm}&tagmode=all&format=json`;
    jsonp(url, { param: 'jsoncallback' }, (err, data) => {
      if (err) return;
      this.setState({
        searchTerm,
        photos: data.items,
        currentPhoto: null
      });
    });
  }

  onFocusPhoto(photo) {
    this.setState({ currentPhoto: photo });
  }

  render() {
    const { searchTerm, photos, currentPhoto } = this.state;

    const photoList = photos.length > 0 &&
      <PhotoList title={searchTerm} photos={photos}
        onFocusPhoto={this.onFocusPhoto} />;
    const fullPhoto = currentPhoto &&
      <FullPhoto photo={currentPhoto} />;

    return (
      <main className="App">
        <header className="App-searchform">
          <SearchForm onSearch={this.onSearch} />
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
