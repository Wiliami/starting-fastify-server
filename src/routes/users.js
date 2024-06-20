async function usersRoute(fastify, options) {
    fastify.get('/users', (req, reply) => {
        const users = [
            { id: 2, name: 'Kipper dev' },
            { id: 3, name: 'Dev Mario Soutinho' },
            { id: 4, name: 'Lucas Montano' }
        ];

        const user = req.body;
          
        const tags = ['js', 'javascript'];

        reply.view('users', { 
            users,
            tags
        });
    });
};

export default usersRoute;