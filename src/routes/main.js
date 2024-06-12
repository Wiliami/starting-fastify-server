import homeRoutes from './home.js';

async function mainRoutes(fastify, options) {
    fastify.register(homeRoutes);
}

export default mainRoutes;