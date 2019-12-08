import { connect } from 'react-redux';
import Input from '../input';
import { setListName } from '../../actions/dialog-action-creators';

export const InputContainer = connect(
  null,
  (dispatch) => ({
    onBlur(value: string) {
      dispatch(setListName(value));
    }
  })
)(Input);