import { connect } from 'react-redux';
import Select from './select';
import { RootState } from '../types/root-state';
import { IssueModel } from '../types/issue-model';

export const SelectContainer = connect(
  (state: RootState, ownProps: {index: number}) => {
    const issues: IssueModel[] = state.list.items[ownProps.index - 1].issues;
    return {
      issues
    }
  }
)(Select);
