import CONSTANTS from '../constants'
import {getTableDataHelper} from '../helpers/getTableDataHelper'

export const calculateSalaryHelper = () => {
    const { RATE } = CONSTANTS;
    const periodResult = {};
    const tableData = getTableDataHelper();
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
