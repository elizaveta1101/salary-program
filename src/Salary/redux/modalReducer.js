import { DISABLE_MODAL_BTN, ENABLE_MODAL_BTN, HIDE_SAVE_MODAL, SAVE_SALARY_DATA, SAVE_TOTAL_SUM, SHOW_SAVE_MODAL } from "./types"

const initialState = {
    visibility: false,
    btnDisable: true
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISABLE_MODAL_BTN: 
            return {...state, btnDisable: true}
        case ENABLE_MODAL_BTN: 
            return {...state, btnDisable: false}
        case SHOW_SAVE_MODAL:
            return {...state, visibility: true}
        case HIDE_SAVE_MODAL:
            return {...state, visibility: false}
        default:
            return state
    }
}