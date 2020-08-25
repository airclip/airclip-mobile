import {Action, DO_SOMETHING} from './types';

export function doSomething(payload: number): Action {
  return {
    type: DO_SOMETHING,
    payload,
  };
}
