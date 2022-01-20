import {WORKER_NAMES} from "../../constants";

export type TSalaryData = {
    [key in keyof typeof WORKER_NAMES]? : {
        rate: number;
        bonus: number;
    };
}
