import { CONSTANTS } from './../constants.js';

const checkPlanComplete = (plan, weekend) => {
    const { PLAN, WEEKEND_PLAN } = CONSTANTS;
    if (weekend && plan >= WEEKEND_PLAN) {
        return true;
    } else if (!weekend && plan >= PLAN) {
        return true;
    } else {
        return false;
    }
}

export { checkPlanComplete };