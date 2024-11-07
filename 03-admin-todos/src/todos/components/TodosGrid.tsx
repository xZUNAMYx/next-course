'use client';

import { Todo } from '@prisma/client'
import React from 'react'
import { TodoItem } from './TodoItem';

// import * as todosApi from '@/todos/helpers/todos';
// import { useRouter } from 'next/navigation';
import { toggleTodo } from '../actions/todo-actions';

interface TodosGridProps {
    todos?: Todo[],
}

export const TodosGrid = ({ todos = [] }: TodosGridProps) => {
    // const router = useRouter();

    // Forma con Rest API
    // const toggleTodo = async(id: string, completed: boolean) => {
    //     const updatedTodo = await todosApi.updateTodo(id, completed);
    //     console.log({updatedTodo});
    //     router.refresh();
    //     // return updatedTodo;
    // }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
            {
                todos.map(todo => (
                    // EL toggleTodo es el que se importa de actions/todo-actions de server actions
                    <TodoItem key={ todo.id } todo={ todo } toggleTodo={ toggleTodo } />
                ))
            }
        </div>
    )
}
