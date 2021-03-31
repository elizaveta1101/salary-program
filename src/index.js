// import {saveAs} from 'file-saver';

// var FileSaver = require('file-saver');
// var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
// FileSaver.saveAs(blob, "hello world.txt");
// console.log(FileSaver);

const CONSTANTS = {
    PLAN: 12,
    WEEKEND_PLAN: 35,
    PLAN_COEF: {
        10: 1,
        20: 1.65,
        30: 2.7,
        60: 4.5,
        720: 7.5
    },
    BONUS: {
        10: 60,
        20: 85,
        30: 162,
        60: 245,
        720: 400
    },
    WEEKEND_BONUS: {
        10: 55,
        20: 65,
        30: 148.5,
        60: 180,
        720: 300
    },
    RATE: 1300
}

const WORKERS = {
    Dasha: "Даша",
    Nastya: "Настя"
}

const inputHighlight = () => {
    const inputFields = document.querySelectorAll('.table input[type=text]');
    inputFields.forEach(field => {
        field.onfocus = function () { this.select(); }
    });
}

const createTable = (data) => {
    const from = Number(document.body.querySelector('.fromDate').value);
    const to = Number(document.body.querySelector('.toDate').value);
    try {
        if (from > 0 && to > 0 && from <= to) {
            const salaryTable = document.querySelector('table');
            for (let i = from; i <= to; i++) {
                salaryTable.innerHTML +=
                    `<tr class="table__row">
                    <td class="table__cell">
                        <input type="number" value="${i}" disabled>
                    </td>
                    <td class="table__cell">
                        <select name="workerName" id="workerName">
                            <option value="Dasha" selected>Даша</option>
                            <option value="Nastya">Настя</option>
                        </select>
                    </td>
                    <td class="table__cell">
                        <input type="checkbox" name="weekend">
                    </td>
                    <td class="table__cell">
                        <input type="text" name="min10" value="">   
                    </td>
                    <td class="table__cell">
                        <input type="text" name="min20" value=""> 
                    </td>
                    <td class="table__cell">
                        <input type="text" name="min30" value=""> 
                    </td>
                    <td class="table__cell">
                        <input type="text" name="min60" value=""> 
                    </td>
                    <td class="table__cell">
                        <input type="text" name="min720" value=""> 
                    </td>
                    <td class="table__cell">
                        <input type="text" name="plan" value="" disabled> 
                    </td>
                </tr>`
            };
            inputHighlight();
            return true;
        }
    } catch (error) {
        console.error("Данные не заданы или заданы некорректно");
        return; 
    }
}

const checkDayFilling = (ticketsData) => {
    let filledDay = false;
    for (const ticket in ticketsData) {
        if (ticketsData[ticket] !== "") {
            filledDay = true;
        }
    }
    return filledDay;
}

const checkPlanComplete = (plan, weekend) => {
    const { PLAN, WEEKEND_PLAN } = CONSTANTS;
    if (weekend && plan >= WEEKEND_PLAN) {
        return true;
    } else if (!weekend && plan >= PLAN) {
        return true;
    } else {
        return false;
    }
}

const calculatePlan = (tickets) => {
    const { PLAN_COEF } = CONSTANTS;
    let dayPlan = 0;
    for (const ticket in tickets) {
        dayPlan += Number(tickets[ticket]) * PLAN_COEF[ticket];
    }
    dayPlan = Number(dayPlan.toFixed(2));
    return dayPlan;
}

const calculateBonus = (tickets, weekend) => {
    const COEF = weekend ? CONSTANTS.WEEKEND_BONUS : CONSTANTS.BONUS;
    let bonus = 0;
    for (const ticket in tickets) {
        bonus += tickets[ticket] * COEF[ticket];
    }
    return bonus;
}

const getDayData = (rowCells) => {
    const data = {
        date: '',
        workerName: "",
        weekend: false,
        tickets: {
            10: 0,
            20: 0,
            30: 0,
            60: 0,
            720: 0,
        },
        plan: 0,
        planComplete: false,
        bonus: 0
    }

    rowCells.forEach((cell, i) => {
        switch (i) {
            case 0:
                data.date = cell.querySelector('input').value;
                break;
            case 1:
                data.workerName = cell.querySelector('select').value;
                break;
            case 2:
                data.weekend = cell.querySelector('input').checked;
                break;
            case 3:
                data.tickets["10"] = cell.querySelector('input').value;
                break;
            case 4:
                data.tickets["20"] = cell.querySelector('input').value;
                break;
            case 5:
                data.tickets["30"] = cell.querySelector('input').value;
                break;
            case 6:
                data.tickets["60"] = cell.querySelector('input').value;
                break;
            case 7:
                data.tickets["720"] = cell.querySelector('input').value;
                break;
        }
    });
    return data;
}

const getTableData = () => {
    let tableData = []; //в нем будем хранить объекты с данными по дням
    const table_rows = document.querySelectorAll('.table__row');
    table_rows.forEach(row => {
        let cells = row.querySelectorAll('td');
        if (cells.length > 0) {
            const dayResult = getDayData(cells);

            let { workerName, weekend, tickets } = dayResult;

            if (checkDayFilling(tickets)) {
                dayResult.plan = calculatePlan(tickets);
                const planCell = cells[8].querySelector('input');
                planCell.value = dayResult.plan;

                dayResult.planComplete = checkPlanComplete(dayResult.plan, weekend);
                if (dayResult.planComplete) {
                    dayResult.bonus = calculateBonus(tickets, weekend);
                    planCell.style.backgroundColor = '#b6ff88';
                } else {
                    planCell.style.backgroundColor = '#ff8888';
                }
                tableData.push(dayResult);
            }
        }
    });
    console.log(tableData);
    return tableData;
}

const calculateSalary = () => {
    const { RATE } = CONSTANTS;
    const periodResult = {};
    const tableData = getTableData();
    tableData.forEach((dayResult) => {
        let { workerName, weekend, tickets, plan, planComplete, bonus } = dayResult;
        if (!periodResult[workerName]) {
            periodResult[workerName] = {
                rate: 0,
                bonus: 0
            }
        }
        periodResult[workerName].rate += RATE;
        periodResult[workerName].bonus += bonus;
    })
    return periodResult;
}

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