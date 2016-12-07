import React, { PureComponent, PropTypes } from 'react';

export default class Searchbox extends PureComponent {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.refs.searchField.value);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Flickr-Suche</h1>
        <p>
          <input ref='searchField' type='text' />
          <button>Submit</button>
        </p>
      </form>
    );
  }
}

Searchbox.propTypes = {
  onSearch: PropTypes.func.isRequired
};
