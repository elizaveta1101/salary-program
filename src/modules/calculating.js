const CONSTANTS = require('./../constants.js');

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



module.exports = {calculatePlan, calculateBonus };