import React, {FC} from "react";
import {useTable} from "./hooks";
import {TableCreator} from "./TableCreator";
import {SalaryTable} from "./SalaryTable";

export const Table: FC = () => {
    const { tableDate, setTableDate, changeDate} = useTable();

    return (
        <>
            <TableCreator date={tableDate} changeInputHandler={setTableDate} saveDateToStore={changeDate}/>
            <SalaryTable />
        </>
    );
}