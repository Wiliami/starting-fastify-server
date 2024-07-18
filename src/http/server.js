import { App } from "./app.js";

const start = async () => {
    const app = new App();

    try {
        const message = await app.listening(3333);
        console.log(message);
    } catch (err) {
        console.error('Failed to start server:', err);
    }
}

start();