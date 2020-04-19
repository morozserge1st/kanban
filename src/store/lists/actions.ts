import { ListModel } from "types/ListModel";
import { IssueModel } from "types/IssueModel";

export const ADD_LIST = "lists/ADD_LIST";
export const DELETE_LIST = "lists/DELETE_LIST";
export const EDIT_LIST = "lists/EDIT_LIST";
export const ADD_ISSUE = "issues/ADD_ISSUE";
export const DELETE_ISSUE = "issues/DELETE_ISSUE";
export const EDIT_ISSUE = "issues/EDIT_ISSUE";

export const addList = (value: ListModel) => ({
  type: ADD_LIST,
  payload: value,
});

export const deleteList = (id: number) => ({
  type: DELETE_LIST,
  payload: id,
});

export const addIssue = (issue: IssueModel, listId: number) => ({
  type: ADD_ISSUE,
  payload: {
    issue,
    listId,
  },
});

export const deleteIssue = (id: number, listId: number) => ({
  type: DELETE_ISSUE,
  payload: {
    id,
    listId,
  },
});
