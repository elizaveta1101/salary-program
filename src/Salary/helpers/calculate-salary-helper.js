import {CONSTANTS} from '../constants'

export const calculateSalaryHelper = (tableData) => {
    const { RATE } = CONSTANTS;
    const periodResult = {};
    tableData.forEach((dayResult) => {
        const { workerName, bonus } = dayResult;

        if (!periodResult[workerName]) {
            periodResult[workerName] = {
                rate: 0,
                bonus: 0
            }
        }
        periodResult[workerName].rate += RATE;
        periodResult[workerName].bonus += bonus;
    });
    return periodResult;
}
