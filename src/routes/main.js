import home from './home.js';

async function mainRoutes(fastify, options) {
    fastify.register(home);
}

export default mainRoutes;