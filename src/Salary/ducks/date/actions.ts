import {TSaveDateState} from "./reducer";

export enum DATE_ACTIONS {
    SAVE_DATE = 'SAVE_DATE'
}

export type TSaveDataAction = {
    type: keyof typeof DATE_ACTIONS,
    payload: TSaveDateState,
}

export function saveDate(date: TSaveDateState): TSaveDataAction {
    return {
        type: DATE_ACTIONS.SAVE_DATE,
        payload: date
    }
}