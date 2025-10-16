import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Todo App</h1>
        <p>Welcome to the Todo Application!</p>
      </body>
    </html>
  `);
});


export default app;
