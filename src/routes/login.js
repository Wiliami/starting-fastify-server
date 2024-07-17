async function login(fastify, options) {
    fastify.get('/login', (req, reply) => {
        reply.view('login');
    });
};

export default login;