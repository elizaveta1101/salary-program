import React , {useState} from 'react'
import { changeDates } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

import './TableCreator.less'

export const TableCreator = () => {
    const dispatch = useDispatch()
    const tableState = useSelector(state => state.table)
    const [dates, setDates] = useState(tableState);
    const changeInputHandler = event => {
        event.persist()
        setDates( prev => ({...prev, ...{
            [event.target.name]: Number(event.target.value)
        }}))
    }   
    return(
        <div className="tableCreator">
            <label>С 
                <input 
                    type="text" 
                    name="fromDate" 
                    className='fromDate'
                    onChange={changeInputHandler} 
                    value={dates.fromDate}
                />
            </label>
            <label>По 
                <input 
                    type="text" 
                    name="toDate" 
                    className='toDate'
                    onChange={changeInputHandler} 
                    value={dates.toDate}
                />
            </label>
            <button 
                className='tableBtn btn' 
                onClick={() => dispatch(changeDates(dates))}
            >Начертить таблицу</button>
        </div>
    )
}
    