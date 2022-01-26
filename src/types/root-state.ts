/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/

import { TableState } from "../containers/table/types";
import { SalaryCalculationState } from "../containers/salary-calculation/types";
import { PageTypesState } from "store/pageStore/types";

export interface RootState {
  table: TableState;
  salaryCalculation: SalaryCalculationState;
  pageStore: PageTypesState;
}
