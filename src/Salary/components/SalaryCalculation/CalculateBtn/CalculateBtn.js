import React from 'react'
import { useDispatch } from 'react-redux'
import { saveSalaryData, saveTotalSum, saveTableData, enableModalBtn } from '../../../redux/actions'
import {calculateSalaryHelper} from '../../../helpers/calculateSalaryHelper'
import {getTableDataHelper} from '../../../helpers/getTableDataHelper'

export const CalculateBtn = () => {
    const dispatch = useDispatch()

    const onclickHandlerEvent = () => {
        const tableData = getTableDataHelper();
        dispatch(saveTableData(tableData));

        const salaryData = calculateSalaryHelper(tableData);
        dispatch(saveSalaryData(salaryData));
        
        let totalSum = 0;
        for (let worker in salaryData) {            
            totalSum+= salaryData[worker].rate + salaryData[worker].bonus
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