import {CONSTANTS} from '../constants'

export const checkPlanCompleteHelper = (plan, weekend) => {
    const { PLAN, WEEKEND_PLAN } = CONSTANTS;
    if (weekend && plan >= WEEKEND_PLAN) {
        return true;
    } else if (!weekend && plan >= PLAN) {
        return true;
    } else {
        return false;
    }
}