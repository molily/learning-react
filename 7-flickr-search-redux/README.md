# Flickr Search with React and Redux

Implement the Flickr search with [Redux](https://github.com/reactjs/redux), [react-redux](https://github.com/reactjs/react-redux) and [redux-thunk](https://github.com/gaearon/redux-thunk).

## Steps

1. Identify action types and create constants for them. Luckily, we have already identified the possible data changes in the previous chapter: `SEARCH`, `SEARCH_RESULTS_LOADED` and `PHOTO_FOCUSSED`.
2. Identify action creators and create them as empty functions first.
3. In the topmost JavaScript file `index.js`, create a Redux store and add redux-thunk as middleware.
4. `connect` the App component to the Redux store. This creates a “smart” wrapper component. Inject the Redux state and all action creators into the component.
5. Wrap the connected App component in a store provider from react-redux.
6. Remove any state and state changing logic from App itself. All state as well as the action creators are now passed in as props. Declare all props.
7. Create a reducer function that gets the state and the action and returns a new state. Handle the action types mentioned above by creating a *new* state object instead of changing the existing state object (see immutability, pure function).
8. Write action creators. These are functions that return an action object. Write an asynchronous action creator (“thunk”) that dispatch actions and makes the Flickr JSONP request.
