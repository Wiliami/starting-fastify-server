import { App } from "./app.js";

const startServer = async () => {
    const app = new App();

    try {
        const message = await app.listen(3334);
        console.log(message);
    } catch (err) {
        console.error('Failed to start server:', err);
    }
}

startServer();