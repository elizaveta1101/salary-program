import React, {FC} from 'react'
import {WorkerSelection} from '../WorkerSelection'

type TTableRow = {
    rowNumber: number
}
export const TableRow: FC<TTableRow> = ({rowNumber}) =>  {
    const onfocusHandlerEvent = (event) => {
        event.target.select();
    }
    return (
        <tr className="table__row">
            <td className="table__cell">
                <input type="number" defaultValue={rowNumber} disabled />
            </td>
            <td className="table__cell">
                <WorkerSelection />
            </td>
            <td className="table__cell">
                <input type="checkbox" name="weekend" />
            </td>
            <td className="table__cell">
                <input type="number" name="min10" defaultValue="" onFocus={onfocusHandlerEvent}/>
            </td>
            <td className="table__cell">
                <input type="number" name="min20" defaultValue="" onFocus={onfocusHandlerEvent}/>
            </td>
            <td className="table__cell">
                <input type="number" name="min30" defaultValue="" onFocus={onfocusHandlerEvent}/>
            </td>
            <td className="table__cell">
                <input type="number" name="min60" defaultValue="" onFocus={onfocusHandlerEvent}/>
            </td>
            <td className="table__cell">
                <input type="number" name="min720" defaultValue="" onFocus={onfocusHandlerEvent}/>
            </td>
            <td className="table__cell">
                <input type="number" name="plan" defaultValue="" disabled />
            </td>
        </tr>
    )
}
    
        
    

    
