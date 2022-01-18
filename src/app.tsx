import {memo} from 'react';
import {Provider} from 'react-redux';
import { Modal } from './Salary/components/Modal';
import { SalaryCalculation } from './Salary/components/SalaryCalculation';
import { SalaryTable } from './Salary/components/SalaryTable';
import { TableCreator } from './Salary/components/TableCreator';

import {store, TRootState} from "./Salary/ducks/store";
import {useSelector} from "./Salary/ducks/useSelector";


export const App = memo(() => {
    const visible = useSelector((state) => state.modal.visibility);
    return (
        <Provider store={store}>
            <div className='container'>
                <TableCreator />
                <SalaryTable />
                <SalaryCalculation />
                {visible && <Modal />}
            </div>
        </Provider>
    );
});

export default App;
