import React, { PureComponent } from 'react';

export default class Counter extends PureComponent {

  constructor(props) {
    super(props);

    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);

    this.state = {
      count: 0
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

  render() {
    return (
      <p>
        <button onClick={this.handleDecrease}>-</button>
        {' '}
        {this.state.count}
        {' '}
        <button onClick={this.handleIncrease}>+</button>
      </p>
    );
  }

}
