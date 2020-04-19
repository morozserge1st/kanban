import { ListModel } from "./ListModel";

export type ListState = {
  items: ListModel[];
  fetching: boolean;
};
