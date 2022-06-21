import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }

    const priority = props.affair.priority;

    return (
        <div className={s.task}>
            <span>{props.affair.name} </span>
            <span
                className={
                `${priority === 'high' ? s.high : ''} 
                ${priority === 'middle' ? s.middle : ''}
                ${priority === 'low' ? s.low : ''}`
                }
            >[{priority}]</span>

            <button
                className={s.delBut}
                onClick={deleteCallback}
            >X
            </button>
        </div>
    )
}

export default Affair
