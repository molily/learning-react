import { DECREASE, INCREASE, RESET } from './actionTypes';

const initialState = {
  counts: [ 0, 10, 20, 30, 40 ]
};

const changeCount = (state, index, count) => {
  // Make a copy of the array instead of changing the old array in-place.
  const counts = state.counts.concat();
  counts[index] = count;
  return { counts };
};

const reducer = (state = initialState, action) => {
  const index = action.payload;
  const { counts } = state;

  if (action.type === DECREASE) {
    return changeCount(state, index, counts[index] - 1);
  }

  if (action.type === INCREASE) {
    return changeCount(state, index, counts[index] + 1);
  }

  if (action.type === RESET) {
    return changeCount(state, index, initialState.counts[index]);
  }

  return state;
};

export default reducer;
