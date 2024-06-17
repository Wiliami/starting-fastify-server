async function homeRoutes(fastify, options) {
    fastify.get('/home', (req, reply) => {
        const users = [
            { id: 1, name: 'Wiliamis' },
            { id: 2, name: 'Kipper dev' },
            { id: 3, name: 'Dev Mario Soutinho' },
            { id: 4, name: 'Lucas Montano' }
        ]

        const buttonActions = {
            button: function() {
                console.log('Botão clicado');
            }
        }
          
        reply.view('index', { 
            users,
            username: 'Wiliamis',
            buttonActions
        });
    });
};

export default homeRoutes;