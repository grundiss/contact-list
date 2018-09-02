import {put} from './storage';

export function syncWithLocalStorage(store) {
  return function(next){
    return function(action){
      const result = next(action);

      if((action.extra || {save: false}).save) {
        put(store.getState().data);
      }

      return result;
    }
  }
}