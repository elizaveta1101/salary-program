import {useCallback, useState} from "react";
import {useInjectReducer} from "redux-injectors";
import {actions, reducer, sliceKey} from "./slice";
import {useActions} from "../../hooks";
import {initialState} from "./slice";
import {SalaryData} from "./types";
import {useTable} from "../table/hooks";
import {getTableDataHelper} from "../../helpers/get-table-data-helper";
import {calculateSalaryHelper} from "../../helpers/calculate-salary-helper";
import {calculateTotalSalarySum} from "../../helpers/calculate-total-salary-sum";

export const useSalaryCalculationSlice = () => {
    useInjectReducer({key: sliceKey, reducer });
    return useActions(actions);
}

const {data, total} = initialState;

export const useSalaryCalculation = () => {
    const {saveData} = useTable();

    const {saveSalaryCalculationData, saveTotalSalarySum} = useSalaryCalculationSlice();
    const [totalSalarySum, setTotalSalarySum] = useState(total);
    const [salaryCalculationData, setSalaryCalculationData] = useState(data);

    const saveTotalSum = useCallback((newSum: number) => saveTotalSalarySum({total: newSum}), [saveTotalSalarySum]);
    const saveCalculationData = useCallback((newData: SalaryData) => saveSalaryCalculationData({data: newData}), [saveSalaryCalculationData]);

    const calculateBtnHandler = () => {
        const tableData = getTableDataHelper();
        saveData(tableData);

        const salaryData = calculateSalaryHelper(tableData);
        saveCalculationData(salaryData);
        setSalaryCalculationData(salaryData);

        const totalSum = calculateTotalSalarySum(salaryData);
        saveTotalSum(totalSum);
        setTotalSalarySum(totalSum);
    }

    return {
        totalSalarySum,
        salaryCalculationData,
        calculateBtnHandler,
    }
}