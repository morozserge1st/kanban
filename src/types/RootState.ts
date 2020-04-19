import { ListState } from "./ListState";
import { DialogState } from "./DialogState";

export type RootState = {
  list: ListState;
  dialog: DialogState;
};
