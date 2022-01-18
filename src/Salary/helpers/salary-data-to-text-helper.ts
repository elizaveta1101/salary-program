//Образец объекта данных из salary.data
//
// workerName: {
//     rate: 0,
//     bonus: 0
// }

import {WORKERS} from '../constants'
import {TSalaryState} from "../ducks/salary/reducer";

export const salaryDataToTextHelper = (salary: TSalaryState) => {

    let text = '';
    Object.entries(WORKERS).forEach(([person, name]) => {
        if (salary.data[person]) {
            const {rate, bonus} = salary.data[person]
            text += 
`
За расчетный период ${name} заработала ${rate + bonus}.
Из них ставка - ${rate} рублей, бонус - ${bonus} рублей.
----
`
        }
    })
    return (
`/------------ИТОГО------------/
${text}
Общие затраты на зарплаты: ${salary.total} рублей.
`
    )
}