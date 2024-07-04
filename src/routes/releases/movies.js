import { movies } from '../../db.js';

async function Movies(fastify, options) {
    fastify.get('/movies', (req, reply) => {
        reply.view('releases/movies', { movies });
    })
}

export default Movies;