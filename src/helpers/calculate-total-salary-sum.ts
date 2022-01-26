import {SalaryData} from "../containers/salary-calculation/types";

export const calculateTotalSalarySum = (data: SalaryData): number => {
    let totalSum = 0;
    for (let worker in data) {
        totalSum += data[worker].rate + data[worker].bonus
    }

    return totalSum;
}