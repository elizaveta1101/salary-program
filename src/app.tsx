import React from 'react';

import {Table} from "./containers/table/Table";
import {SalaryCalculation} from "./containers/salary-calculation";

// import {Modal} from "containers/Modal";
// import {getModalVisibility} from "ducks/modal/selectors";

export const App: React.FC = () => {
    // const visible = getModalVisibility();
    return (
        <div className='container'>
            <Table/>
            <SalaryCalculation />
            {/*{visible && <Modal/>}*/}
        </div>
    );
};

export default App;
