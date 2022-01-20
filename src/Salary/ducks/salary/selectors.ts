import {useTypedSelector} from "../useTypedSelector";

export const getSalary = () => useTypedSelector(state => state.salary);
export const getSalaryData = () => useTypedSelector(state => state.salary.data);
export const getSalaryTotalSum = () => useTypedSelector(state => state.salary.total);

