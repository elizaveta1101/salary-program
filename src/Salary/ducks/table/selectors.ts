import {useTypedSelector} from "../useTypedSelector";

export const getTableDate = () => useTypedSelector(state => state.table.date);
export const getTableData= () => useTypedSelector(state => state.table.data);
