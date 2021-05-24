import {CONSTANTS} from '../constants'

export const calculatePlanHelper = (tickets) => {
    const { PLAN_COEF } = CONSTANTS;
    let dayPlan = 0;
    for (const ticket in tickets) {
        dayPlan += tickets[ticket] * PLAN_COEF[ticket];
    }
    dayPlan = Number(dayPlan.toFixed(2));
    return dayPlan;
}
