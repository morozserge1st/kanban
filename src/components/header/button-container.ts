import {connect} from 'react-redux';
import Button from '../button';
import { openDialog } from '../../actions/dialog-action-creators';

export const ButtonContainer = connect(
  null,
  (dispatch) => ({
    onClick() {
      dispatch(openDialog());
    }
  })
)(Button)