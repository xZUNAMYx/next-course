import { Todo } from "@prisma/client";

export const updateTodo = async (id: string, completed: boolean):Promise<Todo> => {
    const body = { completed: completed };

    const dbTodo = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => response.json());

    console.log(dbTodo);

    return dbTodo;
}

export const createTodo = async (description: string):Promise<Todo> => {
    const body = { description: description };

    const dbTodo = await fetch('/api/todos', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => response.json());

    console.log(dbTodo);

    return dbTodo;
}

export const deleteCompletedTodos = async ():Promise<boolean> => {

    await fetch('/api/todos', {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json'
        },
    }).then(response => response.json());

    return true;
}