import { SAVE_SALARY_DATA, SAVE_TOTAL_SUM } from "./types"

const initialState = {
    data: null,
    total: null
}

export const salaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_SALARY_DATA:
            return {...state, data: action.payload}
        case SAVE_TOTAL_SUM:
            return {...state, total: action.payload}
        default:
            return state
    }
}