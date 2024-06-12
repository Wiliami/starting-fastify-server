async function homeRoutes(fastify, options) {
    fastify.get('/', (req, reply) => {
        reply.view('index', { title: 'Home page'});
    });
};

export default homeRoutes;