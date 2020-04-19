import { ListState } from "types/ListState";
import { ADD_LIST, DELETE_LIST, ADD_ISSUE, DELETE_ISSUE } from "./actions";

export function listReducer(
  state: ListState = {
    items: [],
    fetching: false,
  },
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case DELETE_LIST:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case ADD_ISSUE:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.listId) {
            return {
              ...item,
              issues: [...item.issues, action.payload.issue],
            };
          }
          return item;
        }),
      };

    case DELETE_ISSUE:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.listId) {
            return {
              ...item,
              issues: item.issues.filter(
                (issue) => issue.id !== action.payload.id
              ),
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
}
