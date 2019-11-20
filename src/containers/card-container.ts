import { connect } from 'react-redux';
import  { RootState } from '../types/root-state';
import Card, { CardProps } from '../components/main/card';

export const CardContainer = connect(
  (state: RootState, ownProps: {index: number}) => {
    const item = state.list.items[ownProps.index];
    return {
      title: item.title
    }
  }
)(Card);