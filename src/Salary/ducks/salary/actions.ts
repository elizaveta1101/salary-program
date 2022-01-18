import {TSalaryData} from "./types";

export enum SALARY_ACTIONS {
    SAVE_SALARY_DATA = 'SAVE_SALARY_DATA',
    SAVE_TOTAL_SUM = 'SAVE_TOTAL_SUM',
}

type TSaveSalaryDataAction = {
    type: SALARY_ACTIONS.SAVE_SALARY_DATA,
    payload: TSalaryData,
}

type TSaveTotalSumAction = {
    type: SALARY_ACTIONS.SAVE_TOTAL_SUM,
    payload: number
}

export type TSalaryAction = TSaveSalaryDataAction | TSaveTotalSumAction;

export function saveSalaryData(salaryData: TSalaryData): TSaveSalaryDataAction {
    return {
        type: SALARY_ACTIONS.SAVE_SALARY_DATA,
        payload: salaryData
    }
}
export function saveTotalSum(totalSum: number): TSaveTotalSumAction {
    return {
        type: SALARY_ACTIONS.SAVE_TOTAL_SUM,
        payload: totalSum
    }
}