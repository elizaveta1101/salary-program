import { CHANGE_DATES, SAVE_TABLE_DATA } from "./types"

const initialState = {
    date: {
        fromDate: 1,
        toDate: 1,
    },
    data: {}
}

export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TABLE_DATA: 
            return {...state, data: action.payload}
        case CHANGE_DATES:
            return {...state, date: action.payload}
        default:
            return state
    }
}