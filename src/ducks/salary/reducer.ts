import {SALARY_ACTIONS, TSalaryAction} from "./actions";
import {TSalaryData} from "./types";

export type TSalaryState = {
    data: null | TSalaryData,
    total: null | number
}

const initialState: TSalaryState = {
    data: null,
    total: null
}

export const salaryReducer = (state: TSalaryState = initialState, action: TSalaryAction) => {
    switch (action.type) {
        case SALARY_ACTIONS.SAVE_SALARY_DATA:
            return {...state, data: action.payload}
        case SALARY_ACTIONS.SAVE_TOTAL_SUM:
            return {...state, total: action.payload}
        default:
            return state
    }
}