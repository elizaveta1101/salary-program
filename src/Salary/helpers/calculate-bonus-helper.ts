import {CONSTANTS} from '../constants'
import {TTickets} from "../ducks/table/types";

export const calculateBonusHelper = (tickets: TTickets, weekend: boolean): number => {
    const COEF = weekend ? CONSTANTS.WEEKEND_BONUS : CONSTANTS.BONUS;
    let bonus = 0;
    for (const ticket in tickets) {
        bonus += tickets[ticket] * COEF[ticket];
    }
    return bonus;
}
