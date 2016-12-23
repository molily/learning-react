import React, { PureComponent } from 'react';
import Counter from './Counter';
import './App.css';

export default class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <h1>Counter 3: initialCount prop</h1>
        <Counter initialCount={5} />
        <Counter initialCount={10} />
        <Counter initialCount={-20} />
      </div>
    );
  }

}
