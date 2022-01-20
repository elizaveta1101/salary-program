import {
    useSelector,
    TypedUseSelectorHook,
} from 'react-redux'
import {TRootState} from "./store";

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector