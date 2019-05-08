import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import PhotoList from './PhotoList';
import FullPhoto from './FullPhoto';
import './App.css';

export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.onFocusPhoto = this.onFocusPhoto.bind(this);
  }

  onSearch(searchTerm) {
    this.props.search(searchTerm);
  }

  onFocusPhoto(photo) {
    this.props.focusPhoto(photo);
  }

  render() {
    const { searchTerm, photos, currentPhoto } = this.props;

    const photoList = photos.length > 0 &&
      <PhotoList title={searchTerm} photos={photos}
        onFocusPhoto={this.onFocusPhoto} />;
    const fullPhoto = currentPhoto && <FullPhoto photo={currentPhoto} />;

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
