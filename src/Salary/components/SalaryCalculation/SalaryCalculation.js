import React from 'react'
import { CalculatedSalary } from './CalculatedSalary/CalculatedSalary'
import { CalculateBtn } from './CalculateBtn/CalculateBtn'
import { useSelector } from 'react-redux'

import './TotalSalary.less'
import { SaveBtn } from './SaveBtn/SaveBtn'

export const SalaryCalculation = () => {
    const salaryData = useSelector(state => state.salary.data);
    const totalSalary = useSelector(state => state.salary.total);

    return (
        <div>
            <CalculateBtn />
            <SaveBtn />
            {salaryData && <CalculatedSalary salaryData={salaryData}/>}
            {totalSalary && <div className='totalSalary'>Общая сумма: <span>{totalSalary}</span></div>}
        </div>
    )
}