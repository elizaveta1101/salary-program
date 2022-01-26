import type { RootState } from "types/root-state";

import { initialState } from "./slice";

const selectDomain = (state: RootState) => state.pageStore || initialState;

export const selectedSomeVariable = (state: RootState) =>
  selectDomain(state).someVariable;
