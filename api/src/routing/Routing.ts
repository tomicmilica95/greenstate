import { Express } from 'express';
import { AuthMiddleware } from '../middlewares/authMiddleware';
import { AuthController } from '../controllers/authController';
import { TaskController } from '../controllers/taskController';
import { UserController } from '../controllers/userController';

export const configureRoutes = (app: Express) => {
  app.get('/users', UserController.getUsers);
  app.post('/signup', UserController.create);
  app.post('/login', AuthMiddleware, AuthController.authenticate);
  app.post('/create', TaskController.createTask);
  app.get('/tasks', AuthMiddleware, TaskController.getTasksForCurrentUser);
  app.get('/getAll', TaskController.getTasks);
  app.put('/update/:taskId', TaskController.updateTask);
  app.delete('/delete/:taskId', TaskController.deleteTask);
};
