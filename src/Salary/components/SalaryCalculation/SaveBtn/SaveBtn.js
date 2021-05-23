import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {showSaveModal } from '../../../redux/actions'

export const SaveBtn = () => {
    const dispatch = useDispatch()
    const saveBtnDisable = useSelector(state => state.modal.btnDisable);

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