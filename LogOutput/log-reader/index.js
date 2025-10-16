import express from 'express';
import fs from 'fs';
import path from 'path';

const PORT = process.env.PORT || 3000;
const app = express();

const logFilePath = path.join('/', 'usr', 'src', 'app', 'files', 'log-output.txt');
const pongFilePath = path.join('/', 'usr', 'src', 'app', 'files', 'pingpong.txt');

app.get('/', (req, res) => {
  try {
    let logContent = 'No logs yet';
    if (fs.existsSync(logFilePath)) {
      logContent = fs.readFileSync(logFilePath, 'utf8');
    }

    let pongContent = '0';
    if (fs.existsSync(pongFilePath)) {
      pongContent = fs.readFileSync(pongFilePath, 'utf8').trim();
    }

    res.send(`
      <html>
        <head>
          <title>Log Output</title>
        </head>
        <body>
          <h1>Log Output</h1>
          <pre>${logContent}</pre>
          <p>Ping / Pongs: ${pongContent}</p>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Error reading log file:', error);
    res.status(500).send('<h1>Error reading log file</h1>');
  }
});

app.listen(PORT, () => {
  console.log(`Log reader server started on port ${PORT}`);
});