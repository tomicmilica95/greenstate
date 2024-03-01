import { Request, Response } from 'express';
import { AppDataSource } from '../DataSource';
import { Task } from '../model/Task';

export class TaskController {
  static async getTasks(req: Request, res: Response) {
    const taskRepository = AppDataSource.getRepository(Task);
    const users = await taskRepository.find();

    return res.status(200).json({
      data: users,
    });
  }
}
