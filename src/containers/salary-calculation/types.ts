import {WORKER_NAMES} from "../../constants/workers";

export type SalaryData = {
    [key in keyof typeof WORKER_NAMES]? : {
        rate: number;
        bonus: number;
    };
}

export interface SalaryCalculationState {
    data: SalaryData,
    total: number,
}
