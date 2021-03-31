import { CONSTANTS } from './../constants.js';
import {getTableData} from './getData.js';

const calculatePlan = (tickets) => {
    const { PLAN_COEF } = CONSTANTS;
    let dayPlan = 0;
    for (const ticket in tickets) {
        dayPlan += Number(tickets[ticket]) * PLAN_COEF[ticket];
    }
    dayPlan = Number(dayPlan.toFixed(2));
    return dayPlan;
}

const calculateBonus = (tickets, weekend) => {
    const COEF = weekend ? CONSTANTS.WEEKEND_BONUS : CONSTANTS.BONUS;
    let bonus = 0;
    for (const ticket in tickets) {
        bonus += tickets[ticket] * COEF[ticket];
    }
    return bonus;
}

const calculateSalary = () => {
    const { RATE } = CONSTANTS;
    const periodResult = {};
    const tableData = getTableData();
    tableData.forEach((dayResult) => {
        const { workerName } = dayResult;

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

export {
    calculateBonus,
    calculatePlan,
    calculateSalary
};