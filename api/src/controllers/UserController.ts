import { Request, Response } from 'express';
import { User } from '../model/User';
import { AppDataSource } from '../DataSource';

export class UserController {
  static async getUsers(req: Request, res: Response) {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    return res.status(200).json({
      data: users,
    });
  }
}
