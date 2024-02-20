import { createStore } from 'redux';
import { gameReducer } from './Components/CrashGame/reducer';

export const store = createStore(gameReducer);