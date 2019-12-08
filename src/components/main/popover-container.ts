import { connect } from 'react-redux';
import Popover from './popover';
import { deleteList } from '../../actions/list-action-creators';

export const PopoverContainer = connect(
  null,
  (dispatch, ownProps: {id: number}) => ({
    edit(){
      console.log('edit');
    },
    remove() {
      dispatch(deleteList(ownProps.id));
    }
  })
)(Popover);
