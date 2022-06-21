import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {KeyboardEvent} from 'react';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyDownHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onKeyDownHandler, error, totalUsers}
) => {
    const inputClass = error ? s.error : '';
    const errorDivInner = error ? 'name is require' : '';

    return (
        <div className={s.main}>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyDown={onKeyDownHandler} />
            <span>{error}</span>
            <button disabled={error} onClick={addUser}>add</button>
            <span className={s.count}>{totalUsers}</span>
            <div className={s.errorDiv}>{errorDivInner}</div>
        </div>
    )
}

export default Greeting
