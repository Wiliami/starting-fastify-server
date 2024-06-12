import Fastify from "fastify";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import view from '@fastify/view';
import ejs from 'ejs';
import mainRoutes from "../routes/main.js";


// Necessário para obter o diretório atual com ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class App {

    constructor() {
        this.app = Fastify({ logger: true });
        this.config();
        this.routes();
    }

    config() {
        this.app.register(view, {
            engine: {
                ejs: ejs,
            },
            root: path.join(__dirname, 'views'),
            viewExt: 'ejs',
        });
    }

    routes() {
        this.app.register(mainRoutes);
        this.app.setNotFoundHandler((req, reply) => {
            reply
            .code(404)
            .type('text/html')
            .send('<h1>Página não encontrada</h1>')

        });
    }

    async listen(port) {
        
        return this.app.listen({ port }).then(() => {
            console.log(`HTTP server running on port ${port}.`);
        }).catch(err => {
            console.log('Error starting server:', err);
            throw err;
        });
    }
}


export { App };