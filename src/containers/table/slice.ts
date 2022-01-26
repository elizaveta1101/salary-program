import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TableData, TableDate, TableState} from "./types";
import {sliceKey as name} from './utils';
import {DayData} from "../../ducks/table/types";
import {WORKERS} from "../../constants/workers";

export const initialState: TableState = {
    date: {
        fromDate: 1,
        toDate: 1,
    },
    data: []
};

export const initialDayState: DayData = {
    date: 1,
    workerName: Object.keys(WORKERS)[0],
    weekend: false,
    tickets: {
        '10': 0,
        '20': 0,
        '30': 0,
        "60": 0,
        "720": 0,
    },
    plan: 0,
    planComplete: false,
    bonus: 0
}

const TableSlice = createSlice({
        name,
        initialState,
        reducers: {
            saveTableData(state, action: PayloadAction<{ data: TableData }>) {
                state.data = action.payload.data;
            },
            changeTableDate(state, action: PayloadAction<{ date: TableDate }>) {
                state.date = action.payload.date;
            }
        }
});

export const { actions, reducer, name: sliceKey } = TableSlice;