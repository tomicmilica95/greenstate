import { Express } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { authController } from '../controllers/authController';
import { taskController } from '../controllers/taskController';
import { userController } from '../controllers/userController';

export const configureRoutes = (app: Express) => {
  app.get('/users', userController.getUsers);
  app.get('/tasks', taskController.getTasks);
  app.post('/signup', userController.create);
  app.post('/login', authMiddleware, authController.auth);
};
