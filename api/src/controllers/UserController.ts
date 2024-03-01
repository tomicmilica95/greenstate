// UserController.ts
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../model/User';

export class UserController {
  static async getUsers(req: Request, res: Response) {
    try {
      const userRepository = getRepository(User);
      const users = await userRepository.find();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
