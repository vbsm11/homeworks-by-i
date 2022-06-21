import React, {useState} from 'react'
import {GreetingContainer} from './GreetingContainer'
import {v1} from 'uuid';

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
export function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        users.push({_id: v1(), name: name});
        setUsers(users);
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
