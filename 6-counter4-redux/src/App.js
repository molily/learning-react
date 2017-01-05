import React, { PureComponent, PropTypes } from 'react';
import Counter from './Counter';
import './App.css';

export default class App extends PureComponent {

  render() {
    const { counts, decrease, increase, reset } = this.props;
    const counters = counts.map((count, index) =>
      <Counter
        key={index}
        count={count}
        onDecrease={() => decrease(index)}
        onIncrease={() => increase(index)}
        onReset={() => reset(index)} />
    );
    return (
      <div className="App">
        <h1>Counter 4: State managed by Redux</h1>
        {counters}
      </div>
    );
  }

}

App.propTypes = {
  // Props from the store
  counts: PropTypes.arrayOf(PropTypes.number).isRequired,
  // Action creators
  decrease: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
