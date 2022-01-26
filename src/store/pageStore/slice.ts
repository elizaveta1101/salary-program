import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { useActions as useDispatchActionHook } from "../../hooks";

import { ContainerState } from "./types";

// Глобальный стейт
// используется в любом хуке или вообще где угодно
export const initialState: ContainerState = {
  someVariable: null,
};

const zoneTypesSlice = createSlice({
  name: "pageStore",
  initialState,
  reducers: {
    setSomeVariable(state, action: PayloadAction<string | null>) {
      state.someVariable = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = zoneTypesSlice;
export const useDispatchAction = () => useDispatchActionHook(actions);
