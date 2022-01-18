import {TModalState} from "./modal/reducer";
import {TTableState} from "./table/reducer";

export type TRootState = {
    modal: TModalState
    table: TTableState
}
