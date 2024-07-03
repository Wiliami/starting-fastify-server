import home from './home.js';
import users from './users.js';
import tags from './tags.js';
import products from './products.js';

async function Routes(fastify, options) {
    fastify.register(home);
    fastify.register(users);
    fastify.register(tags);
    fastify.register(products);
}

export default Routes;