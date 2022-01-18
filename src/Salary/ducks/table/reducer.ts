import {TABLE_ACTIONS, TTableAction} from "./actions";
import {TDayData} from "./types";

export type TTableDate = {
    fromDate: number,
    toDate: number,
}

export type TTableData = TDayData[];

export type TTableState = {
    date: TTableDate,
    data: TTableData
}

const initialState: TTableState = {
    date: {
        fromDate: 1,
        toDate: 1,
    },
    data: []
}

export const tableReducer = (state: TTableState = initialState, action: TTableAction) => {
    switch (action.type) {
        case TABLE_ACTIONS.SAVE_TABLE_DATA:
            return {...state, data: action.payload}
        case TABLE_ACTIONS.CHANGE_DATES:
            return {...state, date: action.payload}
        default:
            return state
    }
}