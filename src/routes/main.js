import home from './home.js';
import users from './users.js';

async function mainRoutes(fastify, options) {
    fastify.register(home);
    fastify.register(users);
}

export default mainRoutes;