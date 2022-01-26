import {DayData} from "../../ducks/table/types";

export interface TableDate {
    fromDate: number,
    toDate: number,
}

export type TableData = DayData[];

export interface TableState {
    date: TableDate,
    data: TableData
}

