import fastify from "fastify";
import { fastifyView} from "@fastify/view";
import { createRequire } from 'module';

require = createRequire(import.meta.url);

class App {

    constructor() {
        this.app = fastify();
        ths.config();
        this.routes();
    }

    config() {
        this.app.register(fastifyView, {
            engine: {
                ejs: require("ejs")
            }
        });
    }

    routes() {
        this.app.get('/', routes);
        this.app.get('*' (req, reply) )
    }

    listen(port) {
        this.app.listen(port, () => console.log('HTTP server running on port 3333.'))
    }
}


export { App };