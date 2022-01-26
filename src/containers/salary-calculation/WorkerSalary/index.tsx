import React from 'react'

import './style.less'

type TWorkerSalary = {
    name: string,
    rate: number,
    bonus: number
}

export const WorkerSalary: React.FC<TWorkerSalary> = ({name, rate, bonus}) => {
    return (
        <div className='workerCard card'>
            <div className='card__name'>{name}</div> 
            <div className='card__rate'>Cтавка: {rate}</div> 
            <div className='card__bonus'>Бонусы: {bonus}</div> 
            <div className='card__total'>Всего: <span>{rate + bonus}</span></div> 
        </div> 
    )
}