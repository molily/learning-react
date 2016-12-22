import React, { PureComponent, PropTypes } from 'react';

export default class Counter extends PureComponent {

  constructor(props) {
    super(props);

    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: props.initialCount
    };
  }

  handleDecrease() {
    this.setState({
      count: this.state.count - 1
    });
  }

  handleIncrease() {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleReset() {
    this.setState({
      count: this.props.initialCount
    });
  }

  render() {
    return (
      <p>
        <button onClick={this.handleDecrease}>-</button>
        {' '}
        {this.state.count}
        {' '}
        <button onClick={this.handleIncrease}>+</button>
        {' '}
        <button onClick={this.handleReset}>Reset</button>
      </p>
    );
  }

}

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired
};
