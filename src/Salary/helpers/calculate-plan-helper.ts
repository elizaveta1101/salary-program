import {CONSTANTS} from '../constants'
import {TTickets} from "../ducks/table/types";

export const calculatePlanHelper = (tickets: TTickets): number => {
    const { PLAN_COEF } = CONSTANTS;
    let dayPlan = 0;
    for (const ticket in tickets) {
        dayPlan += tickets[ticket] * PLAN_COEF[ticket];
    }
    dayPlan = Number(dayPlan.toFixed(2));
    return dayPlan;
}
