import { DialogState } from '../types/dialog-state';
import {
  OPEN_DIALOG,
  CLOSE_DIALOG,
  SET_LIST_NAME
} from '../constants/actions';

export function dialogReducer(state: DialogState = {
  open: false,
  name: ''
}, action: { type: string; payload: {value: any}}) {
  switch (action.type) {
    case OPEN_DIALOG: 
      return {
        ...state,
        open: true
      };

    case CLOSE_DIALOG: 
      return {
        ...state,
        open: false
      };

    case SET_LIST_NAME: 
    return {
      ...state,
      name: action.payload.value
    }
    default:
      return state;
  }
}