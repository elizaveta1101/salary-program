import {calculatePlanHelper} from './calculate-plan-helper'
import {calculateBonusHelper} from './calculate-bonus-helper'
import {checkDayFillingHelper} from './check-day-filling-helper'
import {checkPlanCompleteHelper} from './check-plan-complete-helper'

const getDayDataHelper = (rowCells) => {
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
                data.date = Number(cell.querySelector('input').value);
                break;
            case 1:
                data.workerName = cell.querySelector('select').value;
                break;
            case 2:
                data.weekend = cell.querySelector('input').checked;
                break;
            case 3:
                data.tickets["10"] = Number(cell.querySelector('input').value);
                break;
            case 4:
                data.tickets["20"] = Number(cell.querySelector('input').value);
                break;
            case 5:
                data.tickets["30"] = Number(cell.querySelector('input').value);
                break;
            case 6:
                data.tickets["60"] = Number(cell.querySelector('input').value);
                break;
            case 7:
                data.tickets["720"] = Number(cell.querySelector('input').value);
                break;
        }
    });
    return data;
}

export const getTableDataHelper = () => {
    let tableData = []; //в нем будем хранить объекты с данными по дням
    const table_rows = document.querySelectorAll('.table__row');
    table_rows.forEach(row => {
        let cells = row.querySelectorAll('td');
        if (cells.length > 0) {
            const dayResult = getDayDataHelper(cells);

            let { weekend, tickets } = dayResult;

            if (checkDayFillingHelper(tickets)) {
                dayResult.plan = calculatePlanHelper(tickets);
                const planCell = cells[8].querySelector('input');
                planCell.value = dayResult.plan;

                dayResult.planComplete = checkPlanCompleteHelper(dayResult.plan, weekend);
                if (dayResult.planComplete) {
                    dayResult.bonus = calculateBonusHelper(tickets, weekend);
                    planCell.style.backgroundColor = '#b6ff88';
                } else {
                    planCell.style.backgroundColor = '#ff8888';
                }
                tableData.push(dayResult);
            }
        }
    });
    return tableData;
}