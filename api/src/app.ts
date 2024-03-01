import express from 'express';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import { AppDataSource } from './dataSource';
import { configureRoutes } from './routing/routing';

config();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json({ type: 'application/json' }));

app.use(cors());
configureRoutes(app);

AppDataSource.initialize()
  .then(async () => {
    app.listen(port, () => {
      console.log('Server is running on http://localhost:' + port);
    });
    console.log('Data Source has been initialized!');
  })
  .catch((error) => console.log(error));
