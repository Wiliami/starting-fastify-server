import fastify from "fastify";
import { fastifyView} from "@fastify/view";
import { createRequire } from 'module';

const app = fastify();

const require = createRequire(import.meta.url);

app.register(fastifyView, {
    engine: {
        ejs: require("ejs")
    }
});

app.get('/', (req, reply) => {  
    reply.view("index.ejs", { name: 'Wiliamis'});
});

app.listen({ port: 3333 }).then(() => {
    return 'HTTP server running on port 3333.';
});