import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();

app.use(express.json());
app.use(cors());

const directory = path.join('/', 'usr', 'src', 'app', 'files');
const filePath = path.join(directory, 'pingpong.txt');

let counter = 0;

if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory, { recursive: true });
}

app.get('/pingpong', (req, res) => {
  res.send(`pong ${counter}`);
  try {
    fs.writeFileSync(filePath, counter.toString());
  } catch (error) {
    console.error('Error writing to file:', error);
  }
  counter ++;
});

export default app;
