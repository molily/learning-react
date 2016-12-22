import React, { PureComponent, PropTypes } from 'react';

export default class Counter extends PureComponent {

  render() {
    const { count, onDecrease, onIncrease, onReset } = this.props;
    return (
      <p>
        <button onClick={onDecrease}>-</button>
        {' '}
        {count}
        {' '}
        <button onClick={onIncrease}>+</button>
        {' '}
        <button onClick={onReset}>Reset</button>
      </p>
    );
  }

}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};
