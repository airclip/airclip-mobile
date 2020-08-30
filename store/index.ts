import {createStore, Store} from 'redux';
import reducer from './reducer';
import {AppState, Action} from './types';

let store: Store<AppState, Action> | undefined;

export const configureStore = (initialState: AppState) => {
  store = createStore(reducer, initialState);
  return store;
};

export const getStore = () => {
  return store;
};
