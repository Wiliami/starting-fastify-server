import home from './home.js';
import users from './users.js';
import tags from './tags.js';
import products from './products.js';
import movies from './releases/movies.js';

async function Routes(fastify, options) {
    const routes = [ home, users, tags, products, movies ];
    
    routes.forEach(route => fastify.register(route));
}

export default Routes;