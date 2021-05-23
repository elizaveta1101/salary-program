import { SAVE_DATE } from "./types"

const initialState = {
    year: new Date().toLocaleDateString().split('.')[2],
    month: new Date().toLocaleDateString().split('.')[1]
}

export const saveDateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_DATE: 
            return {...state, ...action.payload}
        default:
            return state
    }
}