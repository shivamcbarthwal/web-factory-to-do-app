import React, { useState, useEffect } from 'react'
import { getToDos } from '../services/todos'

export default function ToDoList() {
    const [toDoList, setToDoList] = useState([])

    const changeStatusHandler = (id) => {
        const list = [...toDoList]
        const indexToChange = list.findIndex(item => item.id === id)
        const itemToChange = list[indexToChange]
        list[indexToChange] = { ...itemToChange, done: !itemToChange.done }
        setToDoList(list)
    }

    useEffect(async () => {
        try {
            const response = await getToDos()
            const { todos } = await response.json()
            setToDoList(todos)
        } catch(error) {
            console.log('An error has occured while fetching the todo list', error)
        }
    }, [])

    return (
        <div>
            {
                toDoList && toDoList.sort(({done}) => done ? 1 : -1).map(item =>
                    <>
                        <input 
                            key={item.id}
                            id={item.id}
                            type="checkbox"
                            checked={item.done}
                            onChange={() => changeStatusHandler(item.id)}
                        />
                        <label for={item.id}>
                            { item.done ? <strike>{item.title}</strike> : item.title }
                        </label>
                        <br />
                    </>
                )
            }
        </div>
    )
}
