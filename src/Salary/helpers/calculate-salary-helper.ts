import {CONSTANTS} from '../constants'
import {TTableData} from "../ducks/table/reducer";
import {TSalaryData} from "../ducks/salary/types";

export const calculateSalaryHelper = (tableData: TTableData): TSalaryData => {
    const { RATE } = CONSTANTS;
    const periodResult = <TSalaryData>{};
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
