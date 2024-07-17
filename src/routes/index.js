import home from './home.js';
import users from './users.js';
import tags from './tags.js';
import products from './products.js';
import login from './login.js';
import register from './register.js';

async function Routes(fastify, options) {
    const routes = [ home, users, tags, products, register, login ];
    
    routes.forEach(route => fastify.register(route));
}

export default Routes;