import * as actions from '../actions/list-action-creators';
import data from '../const/data';
import { ListState } from '../types/list-state';

export function listReducer(state: ListState = {
  items: data,
  fetching: false
}, action: { type: any; }) {
  switch (action.type) {
    case actions.addTodo: 
      return {
        ...state
      };
    default:
      return state;
  }
}
