import { connect } from 'react-redux';
import Button from '../button';
import { closeDialog, saveList } from '../../actions/dialog-action-creators';

export const SaveButtonContainer = connect(
  null,
  (dispatch) => ({
    onClick() {
      dispatch(saveList());
    }
  })
)(Button);

export const CloseButtonContainer = connect(
  null,
  (dispatch) => ({
    onClick() {
      dispatch(closeDialog());
    }
  })
)(Button);
