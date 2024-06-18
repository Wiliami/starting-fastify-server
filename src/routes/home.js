async function home(fastify, options) {
    fastify.get('/', (req, reply) => {
        const username = 'Wiliamis';

        reply.view('home', { username });
    });
};


export default home;