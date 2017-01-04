import React, { PureComponent, PropTypes } from 'react';

export default class Counter extends PureComponent {

  // Performance optimization:
  // Implement a custom shouldComponentUpdate function. With each render of
  // the parent component, Counter gets new on* callback functions.
  // This would lead to a re-render even if the count did not change.
  shouldComponentUpdate(nextProps) {
    // Has the count changed? If not, there is no need to re-render.
    return nextProps.count !== this.props.count;
  }

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
