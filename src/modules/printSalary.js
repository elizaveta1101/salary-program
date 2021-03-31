const WORKERS = require('./../workers.js');
const calculateSalary = require('./calculateSalary.js');

const printSalary = () => {
    const salaryData = calculateSalary();
    const resultDiv = document.body.querySelector('.result');
    let totalSum = 0
    resultDiv.innerHTML = '';
    for (worker in salaryData) {
        resultDiv.innerHTML +=
            `${WORKERS[worker]}<br>
            ставка: ${salaryData[worker].rate}<br>
            бонусы: ${salaryData[worker].bonus}<br>
            всего: ${totalSum += (salaryData[worker].rate + salaryData[worker].bonus)}<br>
        <br>`
    }
    resultDiv.innerHTML += `Всего на зарплаты: ${totalSum}`
}

module.exports = printSalary;