import express from 'express';
import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';

const PORT = process.env.PORT || 3001;
const app = express();

const directory = path.join('/', 'usr', 'src', 'app', 'files');
const filePath = path.join(directory, 'log-output.txt');
const id = randomUUID();

if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory, { recursive: true });
}

const startLogging = async () => {
  while (true) {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp}: ${id}\n`;

    try {
      fs.writeFileSync(filePath, logEntry, { flag: 'a' });
    } catch (error) {
      console.error('Error writing to file:', error);
    }

    await new Promise(resolve => setTimeout(resolve, 5000));
  }
}

startLogging().catch(console.error);

app.listen(PORT, (error) => {
  if(!error)
    console.log("Server is started in port " + PORT);
  else 
    console.log("Error occurred, server can't start", error);
});
