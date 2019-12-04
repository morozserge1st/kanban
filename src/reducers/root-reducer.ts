import { combineReducers } from 'redux';
import { RootState } from '../types/root-state';
import { listReducer } from './list-reducer';
import { dialogReducer } from './dialog-reducer';

export default combineReducers<RootState>({
  list: listReducer,
  dialog: dialogReducer
});
