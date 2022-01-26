import React, {FC} from "react";
import {WORKERS} from "../../constants/workers";
import {WorkerSalary} from "./WorkerSalary";
import {CalculateBtn} from "./CalculateBtn";
import {useSalaryCalculation} from "./hooks";

import './style.less';

export const SalaryCalculation: FC = () => {
    const {salaryCalculationData, totalSalarySum, calculateBtnHandler} = useSalaryCalculation();

    const renderedWorkersSalaries = Object.entries(WORKERS).map(([person, name]) => {
        if (salaryCalculationData?.[person]) {
            return (
                <WorkerSalary
                    key={`workerSalary/${person}`}
                    name={name}
                    rate={salaryCalculationData[person].rate}
                    bonus={salaryCalculationData[person].bonus}
                />
            )
        }
    })

    return (
        <div>
            <CalculateBtn calculateBtnHandler={calculateBtnHandler}/>
            {/*<SaveBtn/>*/}
            {salaryCalculationData && renderedWorkersSalaries}
            {totalSalarySum > 0 && <div className='totalSalary'>Общая сумма: <span>{totalSalarySum}</span></div>}
        </div>
    )
}