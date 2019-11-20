import { connect } from 'react-redux';
import { RootState } from '../types/root-state';
import Main, { MainProps } from '../components/main/main';

export const MainContainer = connect(
  (state: RootState): MainProps => ({
    items: state.list.items,
    fetching: state.list.fetching
  })
)(Main);
