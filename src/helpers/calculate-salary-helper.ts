import {CALCULATION_NUMBERS} from '../constants/calculationNumbers';
import {TableData} from "../containers/table/types";
import {SalaryData} from "../containers/salary-calculation/types";

export const calculateSalaryHelper = (tableData: TableData): SalaryData => {
    const { RATE } = CALCULATION_NUMBERS;
    const periodResult = <SalaryData>{};
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
