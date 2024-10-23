import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    await prisma.todo.deleteMany(); // Delete all todos

    await prisma.todo.createMany({ // Create new todos
        data: [
            { description: 'Piedra del alma', completed: true },
            { description: 'Piedra del tiempo', completed: false },
            { description: 'Piedra de la mente', completed: false },
            { description: 'Piedra de la realidad', completed: false },
            { description: 'Piedra del poder', completed: false },
            { description: 'Piedra del espacio', completed: false },
            { description: 'Guantelete del infinito', completed: false },
        ]
    });

    return NextResponse.json({ message: 'Seed executed' });
}

// import { PrismaClient } from '@prisma/client'
 
// const prismaClientSingleton = () => {
//   return new PrismaClient()
// }
 
// declare const globalThis: {
//   prismaGlobal: ReturnType<typeof prismaClientSingleton>;
// } & typeof global;
 
// const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()
 
// export default prisma
 
// if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma