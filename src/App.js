import React from 'react';
import { SalaryCalculation } from './Salary/components/SalaryCalculation/SalaryCalculation';
import {SalaryTable} from './Salary/components/SalaryTable/SalaryTable';
import {TableCreator} from './Salary/components/TableCreator/TableCreator';

function App() {
  return (
    <div className='container'>
      <TableCreator />
      <SalaryTable />
      <SalaryCalculation />
    </div>
  );
}

export default App;
