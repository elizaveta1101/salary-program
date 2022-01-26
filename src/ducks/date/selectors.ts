import {useTypedSelector} from "../../hooks";

export const getDate = () => useTypedSelector(state => state.date);
