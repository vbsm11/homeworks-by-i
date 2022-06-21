import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    filter: FilterType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }
    const filter = props.filter;

    return (
        <div className={s.main}>

            {mappedAffairs}

            <button
                onClick={setAll}
                className={`${filter === 'all' ? s.active : ''}`}
            >All
            </button>

            <button
                onClick={setHigh}
                className={`${filter === 'high' ? s.active : ''}`}
            >High
            </button>

            <button
                onClick={setMiddle}
                className={`${filter === 'middle' ? s.active : ''}`}
            >Middle
            </button>

            <button
                onClick={setLow}
                className={`${filter === 'low' ? s.active : ''}`}
            >Low
            </button>
        </div>
    )
}

export default Affairs
