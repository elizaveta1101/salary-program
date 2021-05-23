import React from 'react'
import { useDispatch } from 'react-redux'
import { saveSalaryData, saveTotalSum } from '../../../redux/actions'
import {calculateSalaryHelper} from '../../../helpers/calculateSalaryHelper'

export const CalculateBtn = () => {
    const dispatch = useDispatch()

    const onclickHandlerEvent = () => {
        const salaryData = calculateSalaryHelper();
        dispatch(saveSalaryData(salaryData));
        let totalSum = 0;
        for (let worker in salaryData) {            
            totalSum+= salaryData[worker].rate + salaryData[worker].bonus
        }
        dispatch(saveTotalSum(totalSum));
    }
    return (
        <button 
            className='calculateBtn btn' 
            onClick={onclickHandlerEvent}
        >Рассчитать</button>
    )
}