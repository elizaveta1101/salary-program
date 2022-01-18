import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux'
import {TRootState} from "./store";

export const useSelector: TypedUseSelectorHook<TRootState> = useReduxSelector