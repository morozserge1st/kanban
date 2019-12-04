import { connect } from 'react-redux';
import Dialog, { DialogProps } from './dialog';
import { RootState } from '../../types/root-state';

export const DialogContainer = connect(
  (state: RootState): DialogProps => {
    return {
      open: state.dialog.open
    }
  }
)(Dialog);
