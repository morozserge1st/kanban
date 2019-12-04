import { DialogState } from '../types/dialog-state';
import {
  OPEN_DIALOG,
  CLOSE_DIALOG
} from '../constants/actions';

export function dialogReducer(state: DialogState = {
  open: false
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
      }

    default:
      return state;
  }
}