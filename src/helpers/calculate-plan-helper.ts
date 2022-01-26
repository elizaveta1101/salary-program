import {CALCULATION_NUMBERS} from '../constants/calculationNumbers'
import {TTickets} from "../ducks/table/types";

export const calculatePlanHelper = (tickets: TTickets): number => {
    const { PLAN_COEF } = CALCULATION_NUMBERS;
    let dayPlan = 0;
    for (const ticket in tickets) {
        dayPlan += tickets[ticket] * PLAN_COEF[ticket];
    }
    dayPlan = Number(dayPlan.toFixed(2));
    return dayPlan;
}
