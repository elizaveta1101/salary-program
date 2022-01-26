import { useCallback, useState } from "react";
import { useInjectReducer } from "redux-injectors";
import { actions, reducer, sliceKey } from "./slice";
import { useActions } from "../../hooks";
import { initialState } from "./slice";
import { SalaryData } from "./types";
import { useTable } from "../table/hooks";
import { getTableDataHelper } from "../../helpers/get-table-data-helper";
import { calculateSalaryHelper } from "../../helpers/calculate-salary-helper";
import { calculateTotalSalarySum } from "../../helpers/calculate-total-salary-sum";

import { useDispatchAction as pageStoreDispatchAction } from "../../store/pageStore/slice";
import { useSelector } from "react-redux";
import { selectedSomeVariable } from "../../store/pageStore/selectors";

export const useSalaryCalculationSlice = () => {
  useInjectReducer({ key: sliceKey, reducer });
  return useActions(actions);
};

const { data, total } = initialState;

export const useSalaryCalculation = () => {
  const { saveData } = useTable();

  const { saveSalaryCalculationData, saveTotalSalarySum } =
    useSalaryCalculationSlice();
  const [totalSalarySum, setTotalSalarySum] = useState(total);
  const [salaryCalculationData, setSalaryCalculationData] = useState(data);

  // оборачивай в колбеки что бы предотвращать ререндер компонентов

  const saveTotalSum = useCallback(
    (newSum: number) => saveTotalSalarySum({ total: newSum }),
    [saveTotalSalarySum]
  );
  const saveCalculationData = useCallback(
    (newData: SalaryData) => saveSalaryCalculationData({ data: newData }),
    [saveSalaryCalculationData]
  );

  // оборачивай в колбеки что бы предотвращать ререндер компонентов

  const calculateBtnHandler = () => {
    const tableData = getTableDataHelper();
    saveData(tableData);

    const salaryData = calculateSalaryHelper(tableData);
    saveCalculationData(salaryData);
    setSalaryCalculationData(salaryData);

    const totalSum = calculateTotalSalarySum(salaryData);
    saveTotalSum(totalSum);
    setTotalSalarySum(totalSum);
  };

  //   пример вызова глобального экшена в любом месте
  const { setSomeVariable } = pageStoreDispatchAction();

  const setVariable = useCallback(
    (variable: string) => setSomeVariable(variable),
    []
  );
  // селектор как селектор можешь хоть в компоненте юзать где душе угодно как и pageStoreDispatchAction
  const someVariable = useSelector(selectedSomeVariable);

  return {
    totalSalarySum,
    salaryCalculationData,
    calculateBtnHandler,
    setVariable,
    someVariable,
  };
};
