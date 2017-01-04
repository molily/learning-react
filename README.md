# Workshop tasks for learning React and Redux

These examples are practical task for an introduction workshop to React and Redux. They are based on [create-react-app](https://github.com/facebookincubator/create-react-app).

## Topics covered

- Simple React components (ES6 classes) that render HTML using JSX
- Instantiating components in JSX
- Event handlers that change component state (`setState`)
- Declaring, passing and using component props
- Initializing state using props
- Passing callback functions as props
- Moving all state into the topmost component, making the other components stateless
- Creating a complex interactive UI in React with several components and central state
- Analyzing all application states and state transitions in preparation of Redux
- Managing the central state in a Redux store instead of React components
- Connected components, actions, action creators, reducers
- Rewrite the previous React examples using Redux

## The tasks

1. Counter component with + and - buttons with a state: `count`
2. Same counter with a reset button
3. Same counter with prop: `initialCount`
4. A counter without state, only props: `count`, `onIncrease`, `onDecrease`, `onReset`. The state for all counters is saved in the parent component (`App`).
5. The state for all counters is saved in a Redux store and is changed using action creators and a reducer.
6. Flickr search: Implement a complex UI in React
7. Flickr search with React and Redux
