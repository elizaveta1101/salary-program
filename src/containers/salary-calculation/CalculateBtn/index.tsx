import React, {FC} from 'react'

import './style.less'

type CalculateBtnProps = {
    calculateBtnHandler: () => void
}
export const CalculateBtn: FC<CalculateBtnProps> = ({calculateBtnHandler}) => {
    return (
        <button
            className='calculateBtn btn'
            onClick={calculateBtnHandler}
        >Рассчитать</button>
    )
}