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

## Component structure

- App
  - Searchbox
  - PhotoList
    - PhotoItem
  - FullPhoto

## Application data

- searchTerm: String (may be empty, i.e. `''`)
- photos: Array&lt;Object> (may be empty, i.e. `[]`)
- currentPhoto: Object (may be empty, i.e. `null`)

## Possible application states

- State 1: Initial state
  - searchTerm: ''
  - photos: []
  - currentPhoto: null

- State 2.1: Search term entered, search request pending
  - searchTerm: 'flower'
  - photos: []
  - currentPhoto: null

- State 2.2: Search request succeeded, showing the results
  - searchTerm: 'flower'
  - photos: [ {}, {} … ]
  - currentPhoto: null

- State 3: User clicked on a result, showing the full photo
  - searchTerm: 'flower'
  - photos: [ {}, {} … ]
  - currentPhoto: {}

## Component definitions

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

- onSearch > `SEARCH`
- Flickr search callback > `SEARCH_RESULTS_LOADED`
- onFocusPhoto > `PHOTO_FOCUSSED`

## Advantages of this structure

1. All possible UI states are known
2. The application data is specified
3. The application data is stored in a central place (App)
4. All possible data changes are known
5. All data changes are performed in a central place (App)