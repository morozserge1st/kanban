import { IssueModel } from "./IssueModel";

export type ListModel = {
  id: number;
  title: string;
  issues: IssueModel[];
};
