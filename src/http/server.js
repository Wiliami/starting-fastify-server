import { App } from "./app.js";

const app = new App();

app.listen(3333)
    .then(message => {
        console.log(message);
    })
    .catch(err => {
        console.error('Failed to start server:', err);
    });