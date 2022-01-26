import {CALCULATION_NUMBERS} from '../constants/calculationNumbers'

export const checkPlanCompleteHelper = (plan: number, weekend: boolean): boolean => {
    const {PLAN, WEEKEND_PLAN} = CALCULATION_NUMBERS;
    if (weekend && plan >= WEEKEND_PLAN) {
        return true;
    } else return (!weekend && plan >= PLAN);
}