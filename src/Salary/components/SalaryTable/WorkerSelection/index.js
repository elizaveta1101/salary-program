import React from 'react'
import {WORKERS} from '../../../constants'

import './style.less'

export const WorkerSelection = () => (
    <select name="workerName" id="workerName" className='workerSelect'>
        {Object.entries(WORKERS).map(([person, name]) => <option key={`worker/${person}`} value={person}>{name}</option>)}
    </select>
)