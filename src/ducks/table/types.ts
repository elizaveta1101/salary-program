import {TTicketsList} from "../../constants/calculationNumbers";

export type DayData = {
    date: number,
    workerName: string,
    weekend: boolean,
    tickets: TTickets,
    plan: number,
    planComplete: boolean,
    bonus: number
}

export type TTickets = TTicketsList;