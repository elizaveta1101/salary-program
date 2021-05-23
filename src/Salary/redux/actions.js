import { CHANGE_DATES, SAVE_SALARY_DATA, SAVE_TOTAL_SUM } from "./types";


export function saveSalaryData(salaryData) {
    return {
        type: SAVE_SALARY_DATA,
        payload: salaryData
    }
}
export function saveTotalSum(totalSum) {
    return {
        type: SAVE_TOTAL_SUM,
        payload: totalSum
    }
}

export function changeDates(newDate) {
    return {
        type: CHANGE_DATES,
        payload: newDate
    }
}
