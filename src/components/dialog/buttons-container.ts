import { connect } from 'react-redux';
import Button from '../button';
import { closeDialog } from '../../actions/dialog-action-creators';

export const SaveButtonContainer = connect(
  null,
  (dispatch) => ({
    onClick() {
      console.log('Прикольно');
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
