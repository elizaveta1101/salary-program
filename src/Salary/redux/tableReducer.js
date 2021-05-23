import { CHANGE_DATES } from "./types"

const initialState = {
    fromDate: 1,
    toDate: 1
}

export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DATES:
            return {...state, ...action.payload}
        default:
            return state
    }
}