import React from 'react'
import {WORKERS} from '../../../constants'
import { WorkerSalary } from './WorkerSalary'

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