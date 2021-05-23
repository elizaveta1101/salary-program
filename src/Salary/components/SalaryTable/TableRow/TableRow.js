import React from 'react'
import {WorkerSelection} from '../WorkerSelection/WorkerSelection'

export const TableRow = ({rowNumber}) =>  {
    const onfocusHandlerEvent = (event) => {
        event.target.select();
    }
    // const cancelTabHandlerEvent = (e) => {
    //     if (e.which == 9) {
    //         e.preventDefault();
    //     }
    // }
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
                <input type="text" name="min10" defaultValue="" onFocus={onfocusHandlerEvent}/>   
            </td>
            <td className="table__cell">
                <input type="text" name="min20" defaultValue="" onFocus={onfocusHandlerEvent}/> 
            </td>
            <td className="table__cell">
                <input type="text" name="min30" defaultValue="" onFocus={onfocusHandlerEvent}/> 
            </td>
            <td className="table__cell">
                <input type="text" name="min60" defaultValue="" onFocus={onfocusHandlerEvent}/> 
            </td>
            <td className="table__cell">
                <input type="text" name="min720" defaultValue="" onFocus={onfocusHandlerEvent}/> 
            </td>
            <td className="table__cell">
                <input type="text" name="plan" defaultValue="" disabled /> 
            </td>
        </tr>
    )
}
    
        
    

    
