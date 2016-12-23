import React, { PureComponent } from 'react';
import Counter from './Counter';
import './App.css';

export default class App extends PureComponent {

  constructor(props) {
    super(props);
    const initialCounts = [ 0, 10, 20, 30, 40 ];
    this.initialCounts = initialCounts;
    this.state = {
      counts: initialCounts
    };
  }

  changeCount(index, count) {
    // Make a copy of the array instead of changing the old array in-place.
    // This way the PureComponent’s shouldComponentUpdate method
    // can detect changes.
    const counts = this.state.counts.concat();
    counts[index] = count;
    this.setState({ counts });
  }

  handleDecrease(index) {
    this.changeCount(index, this.state.counts[index] - 1);
  }

  handleIncrease(index) {
    this.changeCount(index, this.state.counts[index] + 1);
  }

  handleReset(index) {
    this.changeCount(index, this.initialCounts[index]);
  }

  render() {
    const counters = this.state.counts.map((count, index) =>
      <Counter
        key={index}
        count={count}
        onDecrease={this.handleDecrease.bind(this, index)}
        onIncrease={this.handleIncrease.bind(this, index)}
        onReset={this.handleReset.bind(this, index)} />
    );
    return (
      <div className="App">
        <h1>Counter 4: Stateless counters, all state in App</h1>
        {counters}
      </div>
    );
  }

}
