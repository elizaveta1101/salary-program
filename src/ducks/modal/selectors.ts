import {useTypedSelector} from "../../hooks";

export const getModal = () => useTypedSelector(state => state.modal);
export const getModalBtnDisable = () => useTypedSelector(state => state.modal.btnDisable);
export const getModalVisibility = () => useTypedSelector(state => state.modal.visibility);

