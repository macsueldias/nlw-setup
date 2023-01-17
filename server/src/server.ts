import Fastify from "fastify";
import cors from  '@fastify/cors'
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient()

app.register(cors)

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Caminhar'
            }
        }
    })
    return habits
})

app.listen({
    port: 3002,
}).then(() => {
    console.log('HTTP Server running!')
})