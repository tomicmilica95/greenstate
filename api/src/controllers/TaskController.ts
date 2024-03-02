import { Request, Response } from 'express';
import { AppDataSource } from '../dataSource';
import { Task } from '../model/Task';

export class taskController {
  static async getTasks(req: Request, res: Response) {
    const taskRepository = AppDataSource.getRepository(Task);
    const users = await taskRepository.find();

    return res.status(200).json({
      data: users,
    });
  }

  static async getByUserId(req: Request, res: Response) {
    const taskRepository = AppDataSource.getRepository(Task);
    const users = await taskRepository.find();

    return res.status(200).json({
      data: users,
    });
  }
}
