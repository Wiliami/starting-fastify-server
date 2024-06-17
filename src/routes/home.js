async function homeRoutes(fastify, options) {
    fastify.get('/home', (req, reply) => {
        const users = ['Wiliamis', 'Teste', 'Kipper dev', 'Dev Mario Soutinho'];

        reply.view('index', users);
    });
};

export default homeRoutes;