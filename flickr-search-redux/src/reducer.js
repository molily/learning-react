import * as actionTypes from './actionTypes';

const initialState = {
  searchTerm: '',
  photos: [],
  currentPhoto: null
};

export default (state = initialState, action) => {

  if (action.type === actionTypes.SEARCH) {
    return Object.assign({}, initialState, {
      searchTerm: action.payload
    });
  }

  if (action.type === actionTypes.SEARCH_RESULTS_LOADED) {
    return Object.assign({}, state, {
      photos: action.payload
    });
  }

  if (action.type === actionTypes.PHOTO_FOCUSSED) {
    return Object.assign({}, state, {
      currentPhoto: action.payload
    });
  }

  return state;
};
