import { combineReducers } from "redux";
import { tableReducer } from "./tableReducer";
import { salaryReducer } from "./salaryReducer";

export const rootReducer = combineReducers({
    table: tableReducer,
    salary: salaryReducer
});