import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

// import { useEffect } from "react";

export const metadata = {
  title: 'Listado de todos',
  description: 'Listado de todos los todos',
}

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  // useEffect(() => {
  //   fetch('/api/todos')
  //     .then(response => response.json())
  //     .then( console.log );
  // }, []);

  return (
    <div>
      <div className="w-full px-5 mx-5 mb-5">
        <NewTodo />
      </div>
      
      <TodosGrid todos={ todos }/>

    </div>
  );
}