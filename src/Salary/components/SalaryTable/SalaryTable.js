import React from 'react'
import { useSelector } from 'react-redux'
import {TableHeader} from './TableHeader/TableHeader'
import {TableRow} from './TableRow/TableRow'

import './SalaryTable.less'

export const SalaryTable = () => {
    
    const {fromDate, toDate} = useSelector(state => state.table)
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