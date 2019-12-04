import { takeLatest, put, select } from 'redux-saga/effects';
import * as actions from '../constants/actions';
import { IssueModel } from '../types/issue-model';
import { addIssue, deleteIssue } from './list-action-creators';
import { RootState } from '../types/root-state';

function* _addIssue(action: {type: string, payload: { value: string }}) {
  if (action.payload.value.trim()) {
    const id: number = Math.random();
    const issue: IssueModel = {
      id,
      name: action.payload.value.trim()
    };

    yield put(addIssue(issue, 0));
  }
}

function* _moveIssue(action: {type: string, payload: {value: number, index: number}}) {
  const {
    value,
    index
  } = action.payload;

  if (value) {
    const issue: IssueModel  = yield select((s: RootState) => s.list.items[index - 1].issues.find(x => x.id === value));

    yield put(addIssue(issue, index));
    yield put(deleteIssue(value, index - 1));
  }
}

export function* rootSaga() {
  yield takeLatest(actions.ON_ADD_ISSUE, _addIssue);
  yield takeLatest(actions.ON_MOVE_ISSUE, _moveIssue);
}
