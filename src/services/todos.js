export const getToDos = async () => {
    return fetch('/api/todos')
}

export const getToDo = async (id) => {
    return fetch(`/api/todos/${id}`)
}