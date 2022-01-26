import {CALCULATION_NUMBERS} from '../constants/calculationNumbers'
import {TTickets} from "../ducks/table/types";

export const calculateBonusHelper = (tickets: TTickets, weekend: boolean): number => {
    const COEF = weekend ? CALCULATION_NUMBERS.WEEKEND_BONUS : CALCULATION_NUMBERS.BONUS;
    let bonus = 0;
    for (const ticket in tickets) {
        bonus += tickets[ticket] * COEF[ticket];
    }
    return bonus;
}
