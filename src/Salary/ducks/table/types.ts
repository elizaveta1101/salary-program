import {TTicketsList} from "../../constants";

export type TDayData = {
    date: number,
    workerName: string,
    weekend: boolean,
    tickets: TTickets,
    plan: number,
    planComplete: boolean,
    bonus: number
}

export type TTickets = TTicketsList;