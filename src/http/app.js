import Fastify from "fastify";
import { fastifyView} from "@fastify/view";
import ejs from 'ejs';
import routes from '../routes/main.js';


class App {

    constructor() {
        this.app = Fastify({ logger: true });
        this.config();
        this.routes();
    }

    config() {
        this.app.register(fastifyView, {
            engine: {
                ejs: ejs
            }
        });
    }

    routes() {
        this.app.get('/', routes);
        this.app.setNotFoundHandler((req, reply) => {
            reply
            .code(404)
            .type('text/html')
            .send('<h1>Página não encontrada</h1>')

        });
    }

    listen(port) {
        return this.app.listen({ port }).then(() => {
            return `HTTP server running on port ${port}.`;
        }).catch(err => {
            console.log('Error starting server:', err);
            throw err;
        });
    }
}


export { App };