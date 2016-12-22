import React, { Component } from 'react';
import $ from 'jquery';
import Searchbox from './Searchbox';
import PhotoList from './PhotoList';
import FullPhoto from './FullPhoto';
import './App.css';

class App extends Component {

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
    $.ajax({
      url: 'http://api.flickr.com/services/feeds/' +
      'photos_public.gne?jsoncallback=?',
      dataType: 'json',
      data: {
        tags: searchTerm,
        tagmode: 'all',
        format: 'json'
      }
    }).then((data) => {
      this.setState({
        photos: data.items,
        currentPhoto: null
      });
    });
  }

  onFocusPhoto(photo) {
    this.setState({ currentPhoto: photo });
  }

  render() {
    const { photos, currentPhoto } = this.state;
    return (
      <main className="App">
        <header className="App-searchbox">
          <Searchbox onSearch={this.onSearch} />
        </header>
        <section className="App-photolist">
          <PhotoList photos={photos} onFocusPhoto={this.onFocusPhoto} />
        </section>
        <section className="App-fullphoto">
          {currentPhoto && <FullPhoto photo={currentPhoto} />}
        </section>
      </main>
    );
  }
}

export default App;
