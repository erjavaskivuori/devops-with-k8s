import express from 'express';
import fs from 'fs';
import path from 'path';

const PORT = process.env.PORT || 3000;
const app = express();

const filePath = path.join('/', 'usr', 'src', 'app', 'files', 'log-output.txt');

app.get('/', (req, res) => {
  try {
    if (!fs.existsSync(filePath)) {
      return res.status(404).send('<h1>Log file not found</h1>');
    }

    const logContent = fs.readFileSync(filePath, 'utf8');

    res.send(`
      <html>
        <head>
          <title>Log Output</title>
        </head>
        <body>
          <h1>Log Output</h1>
          <pre>${logContent}</pre>
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