import { CHANGE_DATES, DISABLE_MODAL_BTN, ENABLE_MODAL_BTN, HIDE_SAVE_MODAL, SAVE_DATE, SAVE_SALARY_DATA, SAVE_TABLE_DATA, SAVE_TOTAL_SUM, SHOW_SAVE_MODAL } from "./types";

export function saveTableData(tableData) {
    return {
        type: SAVE_TABLE_DATA,
        payload: tableData
    }
}
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

export function showSaveModal() {
    return {
        type: SHOW_SAVE_MODAL
    }
}
export function hideSaveModal() {
    return {
        type: HIDE_SAVE_MODAL
    }
}
export function disableModalBtn() {
    return {
        type: DISABLE_MODAL_BTN
    }
}
export function enableModalBtn() {
    return {
        type: ENABLE_MODAL_BTN
    }
}

export function saveDate(date) {
    return {
        type: SAVE_DATE,
        payload: date
    }
}