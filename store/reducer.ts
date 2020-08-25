import {Map} from 'immutable';
import {Action, DO_SOMETHING} from './types';

const initialState = {
  counter: 0,
  counter2: 'ss',
};

export default function reducer(
  state = initialState,
  action: Action,
): typeof initialState {
  const {type, payload} = action;

  switch (type) {
    case DO_SOMETHING:
      return {...state, counter: payload};
    default:
      return state;
  }
}
