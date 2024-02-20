// reducer.js
import { SET_BET_AMOUNT, SET_MULTIPLIER } from './actions';

const initialState = {
  betAmount: 0,
  multiplier: 0
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BET_AMOUNT:
      return { ...state, betAmount: action.payload };
    case SET_MULTIPLIER:
      return { ...state, multiplier: action.payload };
    default:
      return state;
  }
};