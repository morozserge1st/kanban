import {
  ADD_ISSUE,
  DELETE_ISSUE
} from '../constants/actions';
import { ListState } from '../types/list-state';

export function listReducer(state: ListState = {
  items: [],
  fetching: false
}, action: { type: string; payload: {value: any, index: number}}) {
  switch (action.type) {
    case ADD_ISSUE:
      return {
        ...state,
        items: state.items.map((item, i) => i === action.payload.index ? ({
          ...item,
          issues: item.issues.concat(action.payload.value)
        }) : item)
      };

    case DELETE_ISSUE:
      return {
        ...state,
        items: state.items.map((item, i) => i === action.payload.index ? ({
          ...item,
          issues: item.issues.filter(x => x.id !== action.payload.value)
        }) : item)
      };

    default:
      return state;
  }
}
