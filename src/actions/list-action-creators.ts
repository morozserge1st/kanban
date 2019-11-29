import * as actions from '../const/actions';
import { IssueModel } from '../types/issue-model';

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
