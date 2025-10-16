import express from 'express';
import { randomUUID } from 'crypto';

const app = express();
const id = randomUUID();

const startLogging = async () => {
    while (true) {
        const timestamp = new Date().toISOString();
        console.log(`${timestamp}: ${id}`);

        await new Promise(resolve => setTimeout(resolve, 5000));
    }
}

startLogging().catch(console.error);

app.get('/', (req, res) => {
    res.json({ 
        message: 'Log Output Application',
        id: id,
        timestamp: new Date().toISOString()
    });
});

export default app;