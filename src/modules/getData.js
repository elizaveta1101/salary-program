const calculatePlan = require('./calculating.js').calculatePlan;
const calculateBonus = require('./calculating.js').calculateBonus;
const checkDayFilling = require('./checkDayFilling.js');
const checkPlanComplete = require('./checkPlanComplete.js');

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

            let { weekend, tickets } = dayResult;

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

module.exports = getTableData;