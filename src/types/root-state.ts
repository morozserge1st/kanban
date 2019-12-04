import { ListState } from './list-state';
import { DialogState } from './dialog-state';

export type RootState = {
  list: ListState,
  dialog: DialogState
};
