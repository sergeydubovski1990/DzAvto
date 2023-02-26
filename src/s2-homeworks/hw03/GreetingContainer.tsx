import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'
import user from "../hw08/User";
import {futimes} from "fs";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: any, setName: string, addUserCallback: string) => name.length === 0 ? setError : setName
// если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут}

export const pureOnBlur = (name: string, setError: string) => { // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: any) => { e.key === "Enter" && addUser()

    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback
                                                                 }) => {
    // деструктуризация пропсов
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

    const totalUsers = user.length // need to fix
    const lastUserName = name// need to fix

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

export default GreetingContainer
