const createTable = () => {
    const from = Number(document.body.querySelector('.fromDate').value);
    const to = Number(document.body.querySelector('.toDate').value);
    try {
        if (from > 0 && to > 0 && from <= to) {
            const salaryTable = document.querySelector('table');
            salaryTable.innerHTML = `
            <tr class="table__row">
                <th class="table__cell">День</th>
                <th class="table__cell">Имя работника</th>
                <th class="table__cell">Выходной?</th>
                <th class="table__cell">10 мин</th>
                <th class="table__cell">20 мин</th>
                <th class="table__cell">30 мин</th>
                <th class="table__cell">60 мин</th>
                <th class="table__cell">720 мин</th>
                <th class="table__cell">план</th>
            </tr>`;
            
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
            return true;
        }
    } catch (error) {
        console.error("Данные не заданы или заданы некорректно");
        return; 
    }
}

module.exports = createTable;