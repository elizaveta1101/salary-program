import {TTableData, TTableDate} from "./reducer";

export enum TABLE_ACTIONS {
    CHANGE_DATES = 'CHANGE_DATES',
    SAVE_TABLE_DATA = 'SAVE_TABLE_DATA',
}

type TChangeDatesAction = {
    type: TABLE_ACTIONS.CHANGE_DATES,
    payload: TTableDate,
}

type TSaveTableDataAction = {
    type: TABLE_ACTIONS.SAVE_TABLE_DATA,
    payload: TTableData,
}

export type TTableAction = TChangeDatesAction | TSaveTableDataAction;

export function saveTableData(tableData): TSaveTableDataAction {
    return {
        type: TABLE_ACTIONS.SAVE_TABLE_DATA,
        payload: tableData
    }
}

export function changeDates(newDate): TChangeDatesAction {
    return {
        type: TABLE_ACTIONS.CHANGE_DATES,
        payload: newDate
    }
}
