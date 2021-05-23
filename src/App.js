import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from './Salary/components/Modal/Modal';
import { SalaryCalculation } from './Salary/components/SalaryCalculation/SalaryCalculation';
import {SalaryTable} from './Salary/components/SalaryTable/SalaryTable';
import {TableCreator} from './Salary/components/TableCreator/TableCreator';

function App() {
  const visible = useSelector(state => state.modal.visibility);
  return (
    <div className='container'>
      <TableCreator />
      <SalaryTable />
      <SalaryCalculation />
      {visible && <Modal />}
    </div>
  );
}

export default App;
