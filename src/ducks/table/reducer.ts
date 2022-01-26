import {TABLE_ACTIONS, TTableAction} from "./actions";
import {TableState} from "../../containers/table/types";

const initialState: TableState = {
    date: {
        fromDate: 1,
        toDate: 1,
    },
    data: []
}

export const tableReducer = (state: TableState = initialState, action: TTableAction) => {
    switch (action.type) {
        case TABLE_ACTIONS.SAVE_TABLE_DATA:
            return {...state, data: action.payload}
        case TABLE_ACTIONS.CHANGE_DATES:
            return {...state, date: action.payload}
        default:
            return state
    }
}