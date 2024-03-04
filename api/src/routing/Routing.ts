import { Express } from 'express';
import { AuthMiddleware } from '../middlewares/authMiddleware';
import { AuthController } from '../controllers/authController';
import { TaskController } from '../controllers/taskController';
import { UserController } from '../controllers/userController';

export const configureRoutes = (app: Express) => {
  app.post('/auth', AuthController.authenticate);
  app.post('/signup', UserController.create);
  app.post('/tasks', AuthMiddleware, TaskController.createTask);
  app.get(
    '/tasks/userId',
    AuthMiddleware,
    TaskController.getTasksForCurrentUser
  );
  app.delete('/delete/:taskId', AuthMiddleware, TaskController.deleteTask);
  app.put('/update/:taskId', AuthMiddleware, TaskController.updateTask);
};
