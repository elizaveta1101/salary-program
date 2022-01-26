import React, {ChangeEvent} from 'react'
import {TableDate} from "../types";

import './style.less'

type TableCreator = {
    date: TableDate,
    changeInputHandler: (event: ChangeEvent<HTMLInputElement>) => void,
    saveDateToStore: (date: TableDate) => void
}

export const TableCreator: React.FC<TableCreator> = ({date, changeInputHandler, saveDateToStore}) => {
    const {fromDate, toDate} = date;
    const drawTableHandler = () => saveDateToStore(date);

    return(
        <div className="tableCreator">
            <label>С 
                <input 
                    type="text" 
                    name="fromDate" 
                    className='fromDate'
                    onChange={changeInputHandler} 
                    value={fromDate}
                />
            </label>
            <label>По 
                <input 
                    type="text" 
                    name="toDate" 
                    className='toDate'
                    onChange={changeInputHandler} 
                    value={toDate}
                />
            </label>
            <button 
                className='tableBtn btn' 
                onClick={drawTableHandler}
            >Начертить таблицу</button>
        </div>
    )
}
    