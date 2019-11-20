import { IssueModel } from './issue-model';

export type CardModel = {
  id: number,
  title: string,
  issues: IssueModel[]
};
