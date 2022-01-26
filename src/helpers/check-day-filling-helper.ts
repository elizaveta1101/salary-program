import {TTickets} from "../ducks/table/types";

export const checkDayFillingHelper = (ticketsData: TTickets): boolean => {
    let filledDay = false;
    for (const ticket in ticketsData) {
        if (ticketsData[ticket] !== "") {
            filledDay = true;
        }
    }
    return filledDay;
}
