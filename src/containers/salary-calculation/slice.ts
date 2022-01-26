import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SalaryCalculationState, SalaryData} from "./types";
import {sliceKey as name} from './utils';

export const initialState: SalaryCalculationState = {
    data: {},
    total: 0,
};


const SalaryCalculationSlice = createSlice({
        name,
        initialState,
        reducers: {
            saveSalaryCalculationData(state, action: PayloadAction<{ data: SalaryData }>) {
                state.data = action.payload.data;
            },
            saveTotalSalarySum(state, action: PayloadAction<{ total: number }>) {
                state.total = action.payload.total;
            }
        }
});

export const { actions, reducer, name: sliceKey } = SalaryCalculationSlice;