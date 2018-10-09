import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends PureComponent {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.inputRef = React.createRef();
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.inputRef.current.value);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Flickr Search</h1>
        <p>
          <input ref={this.inputRef} type='text' defaultValue='Flower' />
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
