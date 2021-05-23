import React from 'react'
import {WORKERS} from '../../WORKERS'
import { WorkerSalary } from './WorkerSalary/WorkerSalary'

export const CalculatedSalary = ({salaryData}) => {

    return (
        Object.entries(WORKERS).map(([person, name]) => {
            if (salaryData[person]) {
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
    )
}