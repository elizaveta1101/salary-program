import React from 'react'
import { useDispatch } from 'react-redux'
import {saveTableData} from "salary/ducks/table/actions";
import {saveSalaryData, saveTotalSum} from "salary/ducks/salary/actions";
import {enableModalBtn} from "salary/ducks/modal/actions";
import { calculateSalaryHelper } from 'salary/helpers/calculate-salary-helper'
import { getTableDataHelper } from 'salary/helpers/get-table-data-helper'

import './style.less'


export const CalculateBtn: React.FC = () => {
    const dispatch = useDispatch()

    const onclickHandlerEvent = () => {
        const tableData = getTableDataHelper();
        dispatch(saveTableData(tableData));

        const salaryData = calculateSalaryHelper(tableData);
        dispatch(saveSalaryData(salaryData));

        let totalSum = 0;
        for (let worker in salaryData) {
            totalSum += salaryData[worker].rate + salaryData[worker].bonus
        }
        dispatch(saveTotalSum(totalSum));

        dispatch(enableModalBtn());
    }
    return (
        <button
            className='calculateBtn btn'
            onClick={onclickHandlerEvent}
        >Рассчитать</button>
    )
}