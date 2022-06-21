import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';
import {KeyboardEvent} from 'react';

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

export const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setName(e.currentTarget.value);
    }

    const addUser = () => {
        if (name.trim()) {
            alert(`Hello, ${name.trim()}`)
            addUserCallback(name.trim())
        } else {
            setError(true);
        }
        setName('')
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser();
        }
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onKeyDownHandler={onKeyDownHandler}
            error={error}
            totalUsers={totalUsers}
        />
    )
}