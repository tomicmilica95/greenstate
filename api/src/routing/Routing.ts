import { Express } from 'express';
import { AuthMiddleware } from '../middlewares/authMiddleware';
import { AuthController } from '../controllers/authController';
import { TaskController } from '../controllers/taskController';
import { UserController } from '../controllers/userController';

export const configureRoutes = (app: Express) => {
  app.post('/signup', UserController.create);
  app.post('/auth', AuthController.authenticate);
  app.post('/tasks', AuthMiddleware, TaskController.createTask);
  app.get(
    '/tasks/userId',
    AuthMiddleware,
    TaskController.getTasksForCurrentUser
  );
  app.put('/update/:taskId', TaskController.updateTask);
  app.delete('/delete/:taskId', TaskController.deleteTask);
};
