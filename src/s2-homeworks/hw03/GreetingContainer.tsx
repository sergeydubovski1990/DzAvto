import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'
import user from "../hw08/User";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: (name: string) => void) => name.length === 0 ? setError : setName;


export const pureOnBlur = (name: string, setError: (value: (((prevState: string) => string) | string)) => void) => name.length === 0 ? setError: '';
export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: any) => {
    e.key === "Enter" && addUser()
}
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback
                                                                 }) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const trimmedName = e.currentTarget.value.trim()

        if (trimmedName) {
            setName(trimmedName)
            error && setError('')
        } else
            name && setName('')
        setError('name is require')

    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
        alert(`Hello ${name} !`)
        setName('')
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
        if (e.key === 'Enter' && name) {
            addUser()
        }
    }

    const totalUsers = user.length
    const lastUserName = name

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer;
