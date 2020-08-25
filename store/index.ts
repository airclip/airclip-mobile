import {createStore, combineReducers} from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({state1: reducer});

export type AppState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);
export default store;
