import Fastify from "fastify";

const app = Fastify();

app.get('/', (req, reply) => {
    reply.view("index.ejs")
});


export default app;