import jsonp from 'jsonp';
import { SEARCH, SEARCH_RESULTS_LOADED, PHOTO_FOCUSSED } from './actionTypes';

// Asynchronous action creator with redux-thunk
export const search = (searchTerm) => {
  return (dispatch) => {
    dispatch({ type: SEARCH, payload: searchTerm });
    // Make the JSONP request to Flickr
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const url = `http://api.flickr.com/services/feeds/photos_public.gne?tags=${encodedSearchTerm}&tagmode=all&format=json`;
    jsonp(url, { param: 'jsoncallback' }, (err, data) => {
      if (err) return;
      dispatch({ type: SEARCH_RESULTS_LOADED, payload: data.items });
    })
  };
};

// Synchronous (normal) action creator
export const focusPhoto = (photo) =>
  ({ type: PHOTO_FOCUSSED, payload: photo });
