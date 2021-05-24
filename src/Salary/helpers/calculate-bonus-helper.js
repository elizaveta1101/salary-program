import {CONSTANTS} from '../constants'

export const calculateBonusHelper = (tickets, weekend) => {
    const COEF = weekend ? CONSTANTS.WEEKEND_BONUS : CONSTANTS.BONUS;
    let bonus = 0;
    for (const ticket in tickets) {
        bonus += tickets[ticket] * COEF[ticket];
    }
    return bonus;
}
