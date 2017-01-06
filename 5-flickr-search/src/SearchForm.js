import React, { PureComponent, PropTypes } from 'react';

export default class SearchForm extends PureComponent {

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
        <h1>Flickr Search</h1>
        <p>
          <input ref='searchField' type='text' defaultValue='Flower' />
          {' '}
          <button>Submit</button>
        </p>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired
};
