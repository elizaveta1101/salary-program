import React from 'react'
import { useDispatch } from 'react-redux'
import {showSaveModal} from "ducks/modal/actions";
import {getModalBtnDisable} from "ducks/modal/selectors";

export const SaveBtn: React.FC = () => {
    const dispatch = useDispatch()
    const saveBtnDisable = getModalBtnDisable();

    const onclickHandlerEvent = () => {
        dispatch(showSaveModal());
    }
    return (
        <button 
            className='saveBtn btn' 
            onClick={onclickHandlerEvent}
            disabled={saveBtnDisable}
        >Сохранить</button>
    )
}