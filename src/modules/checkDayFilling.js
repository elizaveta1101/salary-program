const checkDayFilling = (ticketsData) => {
    let filledDay = false;
    for (const ticket in ticketsData) {
        if (ticketsData[ticket] !== "") {
            filledDay = true;
        }
    }
    return filledDay;
}

module.exports = checkDayFilling; 