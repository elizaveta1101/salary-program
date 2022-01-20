import React from 'react';

import {TableCreator} from "salary/components/TableCreator";
import {SalaryTable} from "salary/components/SalaryTable";
import {SalaryCalculation} from "salary/components/SalaryCalculation";
import {Modal} from "salary/components/Modal";
import {getModalVisibility} from "salary/ducks/modal/selectors";



export const App: React.FC = () => {
    const visible = getModalVisibility();
    return (
        <div className='container'>
            <TableCreator/>
            <SalaryTable/>
            <SalaryCalculation/>
            {visible && <Modal/>}
        </div>
    );
};

export default App;
