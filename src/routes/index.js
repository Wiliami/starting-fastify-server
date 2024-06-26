import home from './home.js';
import users from './users.js';
import tags from './tags.js';

async function Routes(fastify, options) {
    fastify.register(home);
    fastify.register(users);
    fastify.register(tags);
}

export default Routes;