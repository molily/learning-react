import React, { PureComponent } from 'react';
import Counter from './Counter';
import './App.css';

export default class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }

}
