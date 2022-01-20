import React from 'react'
import {getSalaryData, getSalaryTotalSum} from "salary/ducks/salary/selectors";
import {WORKERS} from "salary/constants";
import {CalculateBtn} from './CalculateBtn'
import {SaveBtn} from './SaveBtn'
import {WorkerSalary} from "./WorkerSalary";

import './style.less'

export const SalaryCalculation: React.FC = () => {
    const salaryData = getSalaryData();
    const totalSalary = getSalaryTotalSum();
    const renderedWorkersSalaries = Object.entries(WORKERS).map(([person, name]) => {
        if (salaryData?.[person]) {
            return (
                <WorkerSalary
                    key={`workerSalary/${person}`}
                    name={name}
                    rate={salaryData[person].rate}
                    bonus={salaryData[person].bonus}
                />
            )
        }
    })

    return (
        <div>
            <CalculateBtn/>
            <SaveBtn/>
            {salaryData && renderedWorkersSalaries}
            {totalSalary && <div className='totalSalary'>Общая сумма: <span>{totalSalary}</span></div>}
        </div>
    )
}