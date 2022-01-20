import {useTypedSelector} from "../useTypedSelector";

export const getDate = () => useTypedSelector(state => state.date);
