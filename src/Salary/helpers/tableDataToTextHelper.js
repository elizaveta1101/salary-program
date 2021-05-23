//Образец объекта данных из таблицы
//
// const data = {
//     date: '',
//     workerName: "",
//     weekend: false,
//     tickets: {
//         10: 0,
//         20: 0,
//         30: 0,
//         60: 0,
//         720: 0,
//     },
//     plan: 0,
//     planComplete: false,
//     bonus: 0
// }
//

import {WORKERS} from '../constants'

export const tableDataToTextHelper = (data, month, year) => {

    const {date, workerName, weekend, tickets, plan, planComplete, bonus} = data;
    return (
`/------------${date}.${month}.${year}------------/
${weekend ? 'Выходной день.' : 'Будний день.'}
На смене ${WORKERS[workerName]}.
${planComplete ? 'План выполнен.' : 'План не выполнен.'}
Сделано билетов: ${plan}.
Из них:
    10 - ${tickets["10"]},
    20 - ${tickets["20"]},
    30 - ${tickets["30"]},
    60 - ${tickets["60"]},
    720 - ${tickets["720"]}.
Бонус составил: ${bonus} рублей.
/-----------------------------------/
`
    )
}