import { TaskController } from '../controllers/TaskController';
import { UserController } from '../controllers/UserController';

export const configureRoutes = (app: any) => {
  app.get('/users', UserController.getUsers);
  app.get('/tasks', TaskController.getTasks);
};
