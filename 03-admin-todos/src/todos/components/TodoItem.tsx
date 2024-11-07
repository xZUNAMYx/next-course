'use client';

import { startTransition, useOptimistic } from 'react';

import { Todo } from '@prisma/client';
import React from 'react';

import styles from './TodoItem.module.css';
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';
import { boolean } from 'yup';

interface TodoItemProps {
  todo: Todo;
  // TODO: Acciones que quiero llamar
  toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => {
  const [ todoOptimistic, toggleTodoOptimistic ] = useOptimistic(
    todo,
    (state, newCompletedTodo: boolean) => ({ ...state, completed: newCompletedTodo })
  );

  const onToggleTodo = async() => {
    try {
      startTransition(() => toggleTodoOptimistic( !todoOptimistic.completed ))
      
      await toggleTodo( todoOptimistic.id, !todoOptimistic.completed );
    } catch (error) {
      startTransition(() => toggleTodoOptimistic( !todoOptimistic.completed ))
    }
  }

  return (
    <div className={ todoOptimistic.completed ? styles.todoDone : styles.todoPending }>
      <div className='flex flex-col sm:flex-row justify-start items-center gap-4'>

        <div 
          // onClick={ () => toggleTodo(todoOptimistic.id, !todoOptimistic.completed) }
          onClick={ () => onToggleTodo() }
          className={`
            flex p-2 rounded-md cursor-pointer
            hover:bg-opacity-60
            ${ todoOptimistic.completed ? 'bg-green-100' : 'bg-red-100' }  
          `}>

          {
            todoOptimistic.completed
              ? <IoCheckboxOutline size={ 30 } color='green' />
              : <IoSquareOutline size={ 30 } />
          }
        </div>

        <div className='text-center sm:text-left'>
          { todoOptimistic.description }
        </div>

      </div>
    </div>
  )
}
