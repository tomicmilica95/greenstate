import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import { AppDataSource } from './DataSource';
import { UserController } from './controllers/UserController';

config();
const app = express();
const port = process.env.PORT;
app.use(bodyParser.json({ type: 'application/json' }));

app.use(cors());

app.get('*', (req: Request, res: Response) => {
  res.status(505).json({ message: 'Bad Request' });
});

app.get('/users', UserController.getUsers);

AppDataSource.initialize()
  .then(async () => {
    app.listen(port, () => {
      console.log('Server is running on http://localhost:' + port);
    });
    console.log('Data Source has been initialized!');
  })
  .catch((error) => console.log(error));
