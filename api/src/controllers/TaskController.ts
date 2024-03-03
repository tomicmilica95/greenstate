import { Request, Response } from 'express';
import { TaskService } from '../services/taskService';
import { HandlerError } from '../helpers/handleError';

export class TaskController {
  static getTasks = async (req: Request, res: Response) => {
    try {
      const tasks = await TaskService.getAllTasks();

      return res.status(200).json({
        data: tasks,
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
      throw new HandlerError(500, `Internal Server Error`);
    }
  };

  static getTasksForCurrentUser = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const currentUser = res.locals.currentUser;

    try {
      const tasks = await TaskService.getTasksForCurrentUser(currentUser.id);
      res.status(200).json(tasks);
    } catch (err) {
      if (err instanceof HandlerError) {
        res.status(err.statusCode).json({ message: err.message });
      } else {
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  };

  static async createTask(req: Request, res: Response): Promise<void> {
    const { title, description, priority, status } = req.body;
    const currentUser = res.locals.currentUser;
    try {
      const newTask = await TaskService.createTask(
        title,
        description,
        priority,
        status,
        currentUser.id
      );

      if (newTask) {
        res.status(201).json({ newTask });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      if (err instanceof HandlerError) {
        res.status(err.statusCode).json({ message: err.message });
      } else {
        res.status(500).json({ message: 'Something went wrong!' });
      }
    }
  }

  static updateTask = async (req: Request, res: Response) => {
    try {
      const taskId = parseInt(req.params.taskId, 10);

      if (isNaN(taskId)) {
        return res.status(400).json({ message: 'Invalid task ID' });
      }

      const updatedTask = await TaskService.updateTask(taskId, req.body);

      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }

      return res
        .status(200)
        .json({ message: 'Task updated successfully', task: updatedTask });
    } catch (err) {
      if (err instanceof HandlerError) {
        res.status(err.statusCode).json({ message: err.message });
      } else {
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  };

  static deleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
      const taskId = parseInt(req.params.taskId, 10);
      await TaskService.deleteTask(taskId);

      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      throw new HandlerError(404, `Error deleting task`);
    }
  };
}
