import { PHOTO_FOCUSSED, SEARCH, SEARCH_RESULTS_LOADED }from './actionTypes';

const initialState = {
  searchTerm: '',
  photos: [],
  currentPhoto: null
};

const reducer = (state = initialState, action) => {

  if (action.type === SEARCH) {
    return Object.assign({}, initialState, {
      searchTerm: action.payload
    });
  }

  if (action.type === SEARCH_RESULTS_LOADED) {
    return Object.assign({}, state, {
      photos: action.payload
    });
  }

  if (action.type === PHOTO_FOCUSSED) {
    return Object.assign({}, state, {
      currentPhoto: action.payload
    });
  }

  return state;
};

export default reducer;
