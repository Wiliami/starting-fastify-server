import { users } from '../db.js'

async function homeRoutes(fastify, options) {
    fastify.get('/users', (req, reply) => {        
        reply.view('users', { users });
    });
};

export default homeRoutes;  