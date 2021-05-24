import React from 'react'
import { useSelector } from 'react-redux'
import {TableHeader} from './TableHeader'
import {TableRow} from './TableRow'

import './style.less'

export const SalaryTable = () => {
    
    const {fromDate, toDate} = useSelector(state => state.table.date)
    let rows = [];         
    try {
        if (fromDate > 0 && toDate > 0 && fromDate <= toDate) {    
            for (let i = fromDate; i <= toDate; i++) {

                rows.push(<TableRow key={`tableRow/Day:${i}`} rowNumber={i}/>);
            };
        }
    } catch (error) {
        console.error(error);
        console.error("Некорректные данные");
        return;
    }
    return (
        <table className="table">
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    ) 
}