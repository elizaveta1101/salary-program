import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {useInjectReducer} from "redux-injectors";
import {actions, reducer, sliceKey} from "./slice";
import {useActions} from "../../hooks";
import {initialState} from "./slice";
import {TableData, TableDate} from "./types";

export const useTableSlice = () => {
    useInjectReducer({key: sliceKey, reducer });
    return useActions(actions);
}
const {date, data} = initialState;

export const useTable = () => {
    const {changeTableDate, saveTableData} = useTableSlice();
    const [tableDate, setTableDate] = useState(date);
    const [tableData, setTableData] = useState(data);

    const changeDate = useCallback((newDate: TableDate) => changeTableDate({date: newDate}), [changeTableDate]);
    const saveData = useCallback((newData: TableData) => saveTableData({data: newData}), [saveTableData]);

    const setTDate = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        const {name, value} = event.target;

        setTableDate( prev => ({...prev, ...{
                [name]: Number(value)
            }}));
    }, [tableDate]);

    /*const updateData = () => {
        const {fromDate, toDate} = tableDate;

        for (let i = fromDate; i <= toDate; i++) {
            tableData[i - 1] = {...initialDayState, date: i};
        }
    }*/

    const setTData = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        const {name, value, type, checked} = event.target;
        let typedValue: number | boolean;

        if (type === 'number') {
            typedValue = Number(value);
        } else if (type === 'checkbox') {
            typedValue = checked;
        }

        setTableData( prev => ({...prev, ...{
                [name]: typedValue
            }}))
    }, [tableData]);

    useEffect(() => {
        saveData(tableData)
    }, [tableData]);

    return {
        changeDate,
        saveData,
        tableDate,
        tableData,
        setTableDate: setTDate,
        setTableData: setTData,
    }
}