import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import {combineReducers} from "redux";
import {tableReducer} from "./table/reducer";
import {salaryReducer} from "./salary/reducer";
import {modalReducer} from "./modal/reducer";
import {saveDateReducer} from "./date/reducer";

const salaryBlockReducer = combineReducers(
    {
        table: tableReducer,
        salary: salaryReducer,
        modal: modalReducer,
        date: saveDateReducer
    }
)

const rootReducer = combineReducers({
    table: tableReducer,
    salary: salaryReducer,
    modal: modalReducer,
    date: saveDateReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export type TRootState = ReturnType<typeof store.getState>;