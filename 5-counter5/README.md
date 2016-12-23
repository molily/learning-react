# Counter 5

Change counter 4 so that the state and all state changes are managed by [Redux](https://github.com/reactjs/redux). The App is connected to the Redux store using [react-redux](https://github.com/reactjs/react-redux).

 - Identify action types and create constants for them: DECREASE, INCREASE and RESET.
 - Identify action creators and create them as empty functions first.
 - In the topmost JavaScript file index.js, create a Redux store and add the redux thunk as middleware.
 - Connect the App component to the Redux store. This creates a “smart” wrapper component. Inject the Redux state and all action creators into the component.
 - Wrap the connected App component in a store provider from react-redux.
 - Remove any state and state changing logic from App itself. All state as well as the action creators are now passed in as props. Declare all props.
 - Create a reducer function that gets the state and the action and returns a new state. Handle the action types mentioned above by creating a *new* state object instead of changing the existing state object (see immutability, pure function).
 - Write action creators. These are functions that return an action object.
