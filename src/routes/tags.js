import { tags } from '../db.js';

async function Tags(fastify, options) {
    fastify.get('/tags', (req, reply) => {
        reply.view('tags', { tags });
    });
}

export default Tags;