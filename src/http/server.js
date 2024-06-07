import fastify from "fastify";
import { user } from "../features/main.js";

const app = fastify();


app.get('/hello', () => {
    return 'Hello World';
});

app.get('/teste', () => {  
    return 'Hello Teste';
});

app.get('/users', () => {
    return user;
});

app.get('*', () => {
    return 'Not found 404 - Esta página não existe!';
});



app.listen({ port: 3333 }).then(() => {
    return 'HTTP server running on port 3333.';
});