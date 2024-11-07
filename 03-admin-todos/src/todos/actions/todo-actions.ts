'use server';

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";
// import { deleteCompletedTodos } from '../helpers/todos';

export const sleep = async( second: number = 0 ) => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(true);
        }, second * 1000);
    });
}

export const toggleTodo = async( id: string, completed: boolean ): Promise<Todo> => {
    // await sleep(3);

    const todo = await prisma.todo.findFirst({ where: { id } });

    if ( !todo ){
        throw new Error(`Todo with id ${id} not found`);
    }

    const updateTodo = await prisma.todo.update({
        where: { id: id },
        data: { completed: completed }
    });

    revalidatePath('/dashboard/server-actions');
    return updateTodo;
}

export const addTodo = async( description: string ) => {
    try {

        const todo = await prisma.todo.create({ data: { description, completed: false } });

        revalidatePath('/dashboard/server-actions');
        // console.log(todo);
        return todo;
        
    } catch (error) {
        return {
            message: 'Error al crear el todo',
        }
    }
}

export const deleteCompletedTodos = async(): Promise<void> => {
    try {

        await prisma.todo.deleteMany({ where: { completed: true } });

        revalidatePath('/dashboard/server-actions');
        // return NextResponse.json( 'Completados borrados' );
        // return;

    } catch (error) {
        return {
            message: 'Error al borrar los todos completados',
        }
    }
}