import { userController } from '../controllers/userController';
import { taskController } from '../controllers/taskController';

export const configureRoutes = (app: any) => {
  app.get('/users', userController.getUsers);
  app.get('/tasks', taskController.getTasks);
};
