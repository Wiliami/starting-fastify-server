import { App } from "./app.js";

const start = async () => {
    const app = new App();

    try {
        const message = await app.listen(3333);
    } catch (err) {
        console.error('Failed to start server:', err);
    }
}

start();