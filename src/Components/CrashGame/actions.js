// actions.js
export const SET_BET_AMOUNT = 'SET_BET_AMOUNT';
export const SET_MULTIPLIER = 'SET_MULTIPLIER';

export const setBetAmount = amount => ({
  type: SET_BET_AMOUNT,
  payload: amount
});

export const setMultiplier = multiplier => ({
  type: SET_MULTIPLIER,
  payload: multiplier
});