# Counter 4

A counter without state, only props: `count: Number`, `onIncrease: Function`, `onDecrease: Function`, `onReset: Function`. All buttons work as before, but change the state for all counters is managed in the parent component. The state change in the parent triggers the update (re-render) of all counters.

## Steps

1. In Counter, declare the props as described above.
2. Remove the state handling from the Counter component.
3. In App, add a state that holds the counts of all counters. For example, an array of numbers.
4. In App, render a Counter component for each entry in this array.
5. Pass the right props to each of these Counter instances. Pass `onIncrease` and `onDecrease` callback functions that change the specific count in the array.
6. Make sure to create a new array (a copy) instead of mutating the existing array. Update the array, then call `setState`.
