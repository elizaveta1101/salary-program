import {
    useSelector,
    TypedUseSelectorHook,
} from 'react-redux'
import {TRootState} from "../ducks/store";

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector