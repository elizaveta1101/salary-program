const CONSTANTS = require('./../constants.js');
const getTableData = require('./getData.js');

const calculateSalary = () => {
    const { RATE } = CONSTANTS;
    const periodResult = {};
    const tableData = getTableData();
    tableData.forEach((dayResult) => {
        const { workerName, bonus } = dayResult;

        if (!periodResult[workerName]) {
            periodResult[workerName] = {
                rate: 0,
                bonus: 0
            }
        }
        periodResult[workerName].rate += RATE;
        periodResult[workerName].bonus += bonus;
    });
    return periodResult;
}

module.exports = calculateSalary;