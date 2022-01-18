import {useSelector} from "../useSelector";

export const getTableDate = useSelector(state => state.table.date);
export const getTableData= useSelector(state => state.table.data);
