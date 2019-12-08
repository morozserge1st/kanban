import * as actions from '../constants/actions';
import { IssueModel } from '../types/issue-model';
import { CardModel } from '../types/card-model';

export const onAddIssue = (value: string) => ({type: actions.ON_ADD_ISSUE, payload: { value }});
export const onMoveIssue = (value: number, index: number) => ({
  type: actions.ON_MOVE_ISSUE,
  payload: {
    value,
    index
  }
});

export const addIssue = (value: IssueModel, index: number) => ({
  type: actions.ADD_ISSUE,
  payload: {
    value,
    index
  }
});

export const deleteIssue = (value: number, index: number) => ({
  type: actions.DELETE_ISSUE,
  payload: {
    value,
    index
  }
});

export const addList = (value: CardModel) => ({
  type: actions.ADD_LIST,
  payload: {
    value
  }
});

export const deleteList = (value: number) => ({
  type: actions.DELETE_LIST,
  payload: {
    value
  }
});
