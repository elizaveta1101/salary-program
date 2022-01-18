export enum MODAL_ACTIONS {
    SHOW_SAVE_MODAL = 'SHOW_SAVE_MODAL',
    HIDE_SAVE_MODAL = 'HIDE_SAVE_MODAL',
    DISABLE_MODAL_BTN = 'DISABLE_MODAL_BTN',
    ENABLE_MODAL_BTN = 'ENABLE_MODAL_BTN',
}

type TShowSaveModalAction = {
    type: MODAL_ACTIONS.SHOW_SAVE_MODAL,
}

type THideSaveModalAction = {
    type: MODAL_ACTIONS.HIDE_SAVE_MODAL,
}

type TEnableModalBtnAction = {
    type: MODAL_ACTIONS.ENABLE_MODAL_BTN,
}

type TDisableModalBtnAction = {
    type: MODAL_ACTIONS.DISABLE_MODAL_BTN,
}

export type TModalAction = TShowSaveModalAction | THideSaveModalAction | TEnableModalBtnAction | TDisableModalBtnAction;

export function showSaveModal(): TShowSaveModalAction {
    return {
        type: MODAL_ACTIONS.SHOW_SAVE_MODAL
    }
}
export function hideSaveModal(): THideSaveModalAction {
    return {
        type: MODAL_ACTIONS.HIDE_SAVE_MODAL
    }
}
export function disableModalBtn(): TDisableModalBtnAction {
    return {
        type: MODAL_ACTIONS.DISABLE_MODAL_BTN
    }
}
export function enableModalBtn(): TEnableModalBtnAction {
    return {
        type: MODAL_ACTIONS.ENABLE_MODAL_BTN
    }
}