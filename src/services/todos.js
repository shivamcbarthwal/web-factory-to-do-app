export const getToDos = async () => {
    return fetch('/api/todos')
}

export const getToDo = async (id) => {
    return fetch(`/api/todos/${id}`)
}

export const addToDo = async (toDoItem) => {
    return fetch('api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(toDoItem)
    })
}