import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

let counter = 0;

app.get('/pingpong', (req, res) => {
  res.send(`pong ${counter}`);
  counter++;
});

export default app;
