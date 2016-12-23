import React, { PureComponent } from 'react';
import Counter from './Counter';
import './App.css';

export default class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <h1>Counter 1: Managing state</h1>
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }

}
