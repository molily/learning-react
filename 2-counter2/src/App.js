import React, { PureComponent } from 'react';
import Counter from './Counter';
import './App.css';

export default class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <h1>Counter 2: decrease, increase and reset</h1>
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }

}
