import {MODAL_ACTIONS, TModalAction} from "./actions";

export type TModalState = {
    visibility: boolean,
    btnDisable: boolean
}

const initialState: TModalState = {
    visibility: false,
    btnDisable: true
}

export const modalReducer = (state: TModalState = initialState, action: TModalAction) => {
    switch (action.type) {
        case MODAL_ACTIONS.DISABLE_MODAL_BTN:
            return {...state, btnDisable: true}
        case MODAL_ACTIONS.ENABLE_MODAL_BTN:
            return {...state, btnDisable: false}
        case MODAL_ACTIONS.SHOW_SAVE_MODAL:
            return {...state, visibility: true}
        case MODAL_ACTIONS.HIDE_SAVE_MODAL:
            return {...state, visibility: false}
        default:
            return state
    }
}