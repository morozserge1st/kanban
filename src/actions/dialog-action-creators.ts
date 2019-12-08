import * as actions from '../constants/actions';

export const openDialog = () => ({type: actions.OPEN_DIALOG});
export const closeDialog = () => ({type: actions.CLOSE_DIALOG});

export const setListName = (value: string) => ({type: actions.SET_LIST_NAME, payload: {value}});
export const saveList = () => ({type: actions.SAVE_LIST});
