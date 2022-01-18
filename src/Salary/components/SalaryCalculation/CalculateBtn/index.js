import React from 'react'
import { useDispatch } from 'react-redux'
import { calculateSalaryHelper } from '../../../helpers/calculate-salary-helper.ts'
import { getTableDataHelper } from '../../../helpers/get-table-data-helper.ts'

import './style.less'
import {saveTableData} from "@/Salary/ducks/table/actions.ts";
import {saveSalaryData, saveTotalSum} from "@/Salary/ducks/salary/actions.ts";
import {enableModalBtn} from "@/Salary/ducks/modal/actions.ts";

export const CalculateBtn = () => {
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