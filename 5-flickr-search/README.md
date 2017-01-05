# Flickr Search with React

Implement this UI in React:

- [Flickr Search – jQuery implementation](http://molily.de/javascript-introduction/flickr-jquery.html)
- [Flickr Search – Backbone implementation](http://molily.de/javascript-introduction/flickr-backbone.html)

## Planning

Before writing any code, we should plan how to structure our app.

- How does the UI work? What are the possible UI states? What are the possible state transitions?
- What is the data we are dealing with?
- How to break down the app into small UI components?
- Which components do we need? What is their purpose? What data do they expect? What is their behavior / interactivity?

## Application data

What is the data the application deals with?

- searchTerm: String (may be empty, i.e. `''`)
- photos: Array&lt;Object> (may be empty, i.e. `[]`)
- currentPhoto: Object (may be empty, i.e. `null`)

## Possible application states

Now that we have identified the application-wide data, what are the possible UI states and how does the data look then?

- State 1: Initial state. Empty form, no search results, no full photo
  - searchTerm: ''
  - photos: []
  - currentPhoto: null

- State 2: Search term entered, search request pending
  - searchTerm: 'flower'
  - photos: []
  - currentPhoto: null

- State 3: Search request succeeded, showing the search results
  - searchTerm: 'flower'
  - photos: [ {…}, {…}, … ]
  - currentPhoto: null

- State 4: User clicked on a search result, showing the full photo
  - searchTerm: 'flower'
  - photos: [ {…}, {…}, … ]
  - currentPhoto: {…}

## Component structure

This is how the application can be composed using React component:

- App
  - Searchbox
  - PhotoList
    - PhotoItem
  - FullPhoto

## Component definitions

Now let’s define what these components do, which props they expect and which state they manage.

### App

- Behavior:
  - Topmost component that holds all state and renders the main components
- props:
  - *no props*
- state:
  - searchTerm: String
  - photos: Array&lt;Object>
  - currentPhoto: Object

### Searchbox

- Behavior:
  - Renders a search form with a text input field and a submit button.
  - When the form is submitted, Searchbox calls `onSearch` passing the search term.
- props:
  - onSearch: Function
- state:
  - *no state*

### PhotoList

- Behavior:
  - Renders the search results as a list of PhotoItem components.
- props:
  - searchTerm: String
  - photos: Array&lt;Object>
  - onFocusPhoto: Function
- state:
  - *no state*

### PhotoItem

- Behavior:
  - Renders a clickable photo thumbnail.
  - If the user clicks on a photo in the results, PhotoList calls `onFocusPhoto` passing the photo object.
- props:
  - photos: Array&lt;Object>
  - onFocusPhoto: Function
- state:
  - *no state*

### FullPhoto

- Behavior:
  - Renders a photo, its metadata and links to the original Flickr page.
- props:
  - photo: Object
- state:
  - *no state*

## Possible data changes

Which are the ways the application data can change? Let’s give them a name.

- When `onSearch` is called, `SEARCH` happens.
- When the Flickr search succeeds, `SEARCH_RESULTS_LOADED` happens.
- When `onFocusPhoto` is called, `PHOTO_FOCUSSED` happens.

This helps us to understand the user actions that lead to a data change and UI state change. It will also help to refactor the app using Redux in the next exercise.

## Advantages of this structure

1. All possible UI states are known
2. The application data is specified
3. The application data is stored in a central place (App)
4. All possible data changes are known
5. All data changes are performed in a central place (App)
