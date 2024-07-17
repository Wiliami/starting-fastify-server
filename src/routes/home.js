async function home(fastify, options) {
    fastify.get('/', (req, reply) => {
        reply.view('home');
    });
};


export default home;