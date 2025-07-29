export function setTodo(id, value) {
    try {
        window.localStorage.setItem(id, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
}

export function getTodo (id) {
    try {
        const todo = window.localStorage.getItem(id);
        return todo ? JSON.parse(todo) : undefined;
    } catch (error) {
        console.log(error)
    }
}