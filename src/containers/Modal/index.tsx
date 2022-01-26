import * as React from "react";
import {useDispatch} from 'react-redux'
import {saveAs} from 'file-saver';

import {tableDataToTextHelper} from 'helpers/table-data-to-text-helper';
import {salaryDataToTextHelper} from 'helpers/salary-data-to-text-helper';

import {saveDate} from "ducks/date/actions";
import {hideSaveModal} from "ducks/modal/actions";

import {getDate} from "ducks/date/selectors";
import {getTableData, getTableDate} from "ducks/table/selectors";
import {getSalary} from "ducks/salary/selectors";

import './style.less'

export const Modal = () => {
    const dispatch = useDispatch();
    const {fromDate, toDate} = getTableDate();
    const tableData = getTableData();
    const salaryData = getSalary();
    const date = getDate();
    const {month, year} = date;

    const saveDataToTxt = () => {
        const monthInput: HTMLInputElement = document.querySelector('.modal__month');
        let [year, month] = monthInput.value.split('-');
        dispatch(saveDate({year, month}));

        let text = '';
        tableData.forEach(data => {
            text += tableDataToTextHelper(data, date);
        });
        text += salaryDataToTextHelper(salaryData);

        let blob = new Blob([text], {type: "text/plain;charset=utf-8"});
        saveAs(blob, `Зарплата ${fromDate}-${toDate}.${month}.${year} .txt`);

        dispatch(hideSaveModal());
    }

    return (
        <div className='modal'>
            <input type="month" name="month" className="modal__month" defaultValue={`${year}-${month}`}/>
            <button className="modal__btn btn" onClick={saveDataToTxt}>ОК</button>
            <button className="modal__btn btn" onClick={() => dispatch(hideSaveModal())}>Назад</button>
        </div>
    )
}