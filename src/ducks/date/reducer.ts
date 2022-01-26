import {DATE_ACTIONS, TSaveDataAction} from "./actions";

export type TSaveDateState = {
    year: string,
    month: string
}

const initialState: TSaveDateState = {
    year: new Date().toLocaleDateString().split('.')[2],
    month: new Date().toLocaleDateString().split('.')[1]
}

export const saveDateReducer = (state: TSaveDateState = initialState, action: TSaveDataAction) => {
    switch (action.type) {
        case DATE_ACTIONS.SAVE_DATE:
            return {...state, ...action.payload}
        default:
            return state
    }
}