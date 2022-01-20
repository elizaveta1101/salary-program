import {CONSTANTS} from '../constants'

export const checkPlanCompleteHelper = (plan: number, weekend: boolean): boolean => {
    const {PLAN, WEEKEND_PLAN} = CONSTANTS;
    if (weekend && plan >= WEEKEND_PLAN) {
        return true;
    } else return (!weekend && plan >= PLAN);
}