async function register(fastify, opitons) {
    fastify.get('/register', (req, reply) => {
        reply.view('register');
    });
};

export default register;