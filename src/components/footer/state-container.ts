import {connect} from 'react-redux';
import { RootState } from '../../types/root-state';
import { CardModel } from '../../types/card-model';
import State, { StateProps } from './state';

export const StateContainer = connect(
  (state: RootState): StateProps => {
    const items: CardModel[] = state.list.items;
     if (items.length) {
      return {
        active: items[0].issues.length,
        finished: items[items.length - 1].issues.length
      }  
     }
    return {
      active: 0,
      finished: 0
    }
  }
)(State);
