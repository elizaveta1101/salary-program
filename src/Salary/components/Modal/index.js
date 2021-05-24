import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideSaveModal, saveDate } from '../../redux/actions';
import {saveAs} from 'file-saver';
import { tableDataToTextHelper } from '../../helpers/table-data-to-text-helper';
import { salaryDataToTextHelper } from '../../helpers/salary-data-to-text-helper';

import './style.less'

export const Modal = () => {
    const dispatch = useDispatch();
    const {fromDate, toDate} = useSelector(state => state.table.date);
    const tableData = useSelector(state => state.table.data);
    const salaryData = useSelector(state => state.salary);
    const {year, month} = useSelector(state => state.date);

    const successHandler = () => {
        const monthInput = document.querySelector('.modal__month');
        let [year, month] = monthInput.value.split('-');
        dispatch(saveDate({year, month}));
        
        let text = '';
        tableData.forEach(data => {
            text += tableDataToTextHelper(data, month, year);
        });
        text +=salaryDataToTextHelper(salaryData);
    
        let blob = new Blob([text], {type: "text/plain;charset=utf-8"});
        saveAs(blob, `Зарплата ${fromDate}-${toDate}.${month}.${year} .txt`);
        
        dispatch(hideSaveModal());
    }

    return (
        <div className='modal'>
            <input type="month" name="month" className="modal__month" defaultValue={`${year}-${month}`}/>
            <button className="modal__btn btn" onClick={successHandler}>ОК</button>
            <button className="modal__btn btn" onClick={() => dispatch(hideSaveModal())}>Назад</button>
        </div>
    )
}