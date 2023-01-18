import Fastify from "fastify";
import cors from  '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import { appRoutes } from "./lib/routes";

const app = Fastify();

app.register(cors)
app.register(appRoutes)

app.listen({
    port: 3002,
}).then(() => {
    console.log('HTTP Server running!')
})