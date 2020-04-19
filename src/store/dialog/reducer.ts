import { DialogState } from "types/DialogState";
import { OPEN_DIALOG, CLOSE_DIALOG } from "./actions";

export function dialogReducer(
  state: DialogState = {
    open: false,
  },
  action: { type: string }
) {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        ...state,
        open: true,
      };

    case CLOSE_DIALOG:
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
}
