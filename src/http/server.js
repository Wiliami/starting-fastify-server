import { App } from "./app.js";

const startServer = async () => {
    const app = new App();

    try {
        const message = await app.listen(3333);
        console.log(message);
    } catch (error) {
        console.log('Failed to start server:', err);
    }
}

startServer();