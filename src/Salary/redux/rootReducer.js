import { combineReducers } from "redux";
import { tableReducer } from "./tableReducer";
import { salaryReducer } from "./salaryReducer";
import { modalReducer } from "./modalReducer";
import { saveDateReducer } from "./saveDateReducer";

export const rootReducer = combineReducers({
    table: tableReducer,
    salary: salaryReducer,
    modal: modalReducer,
    date: saveDateReducer
});