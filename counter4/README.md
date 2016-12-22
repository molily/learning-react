# Counter 4

A counter without state, only props: `count: Number`, `onIncrease: Function`, `onDecrease: Function`, `onReset: Function`. The state for all counters is saved in the parent component (`App`). All buttons work as before, but change the state in the parent component. The state change in the parent triggers the update (re-render) of all counters.
