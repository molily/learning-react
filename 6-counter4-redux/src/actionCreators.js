import { DECREASE, INCREASE, RESET } from './actionTypes';

export const decrease = (index) =>
  ({ type: DECREASE, payload: index });

export const increase = (index) =>
  ({ type: INCREASE, payload: index });

export const reset = (index) =>
  ({ type: RESET, payload: index });
