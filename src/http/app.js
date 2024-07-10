import Fastify from "fastify";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import view from '@fastify/view';
import ejs from 'ejs';
import Routes from "../routes/index.js";
import fastifyCors from "@fastify/cors";
import fastifyStatic from "@fastify/static";

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
        this.app.register(fastifyCors, {
            origin: 'http://localhost:5173/',
        });
        
        this.app.register(view, {
            engine: {
                ejs: ejs,
            },
            root: path.join(__dirname, '../views'),
            viewExt: 'ejs',
        });

        this.app.register((fastifyStatic), {
            root: path.join(__dirname, '../../public'),
            prefix: '/public/'
        });
    }

    routes() {
        this.app.register(Routes);
        this.app.setNotFoundHandler((req, reply) => {
            reply
            .code(404)
            .type('text/html')
            .send('<p>Página não encontrada</p>')

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