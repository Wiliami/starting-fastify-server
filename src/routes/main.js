import Fastify from "fastify";
import home from './home.js';

const routes = Fastify();

routes.get('/', (req, reply) => reply.view(home) );


export default routes;