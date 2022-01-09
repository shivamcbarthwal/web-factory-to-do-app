import React, { useState, useEffect } from 'react'
import { getToDos } from '../services/todos'

export default function ToDoList() {
    const [toDoList, setToDoList] = useState([])

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
                toDoList && toDoList.map(item =>
                    <><input key={item.id} type="checkbox" checked={item.done} /> {item.title}</>
                )
            }
        </div>
    )
}
