export type TTicketsList = {
    10: number,
    20: number,
    30: number,
    60: number,
    720: number,
}

type TCalculationNumbers = {
    PLAN: number,
    WEEKEND_PLAN: number,
    PLAN_COEF: TTicketsList,
    BONUS: TTicketsList,
    WEEKEND_BONUS: TTicketsList,
    RATE: number
}

export const CALCULATION_NUMBERS: TCalculationNumbers = {
    PLAN: 12,
    WEEKEND_PLAN: 35,
    PLAN_COEF: {
        '10': 1,
        '20': 1.65,
        '30': 2.7,
        '60': 4.5,
        '720': 7.5
    },
    BONUS: {
        '10': 60,
        '20': 85,
        '30': 162,
        '60': 245,
        '720': 400
    },
    WEEKEND_BONUS: {
        '10': 55,
        '20': 65,
        '30': 148.5,
        '60': 180,
        '720': 300
    },
    RATE: 1300
}