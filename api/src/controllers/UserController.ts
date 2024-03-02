import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { AppDataSource } from '../dataSource';
import { HandlerError } from '../helpers/HandleError';
import { User } from '../model/User';

export class userController {
  static create = async (req: Request, res: Response): Promise<void> => {
    const user: any = {
      email: req.body.email,
      password: req.body.password,
    };
    try {
      if (!user.email) {
        throw new HandlerError(400, `firstname and lastname are required`);
      }
      if (!user.password) {
        throw new HandlerError(400, `password is required`);
      }
      const userRepository = AppDataSource.getRepository(User);
      const newUser = userRepository.create({
        email: req.body.email,
        password: req.body.password,
      });

      await userRepository.save(newUser);
      const token = jwt.sign({ user: user }, process.env.JWT_SECRET || '');

      res.json(token);
    } catch (err) {
      if (err instanceof HandlerError) {
        res.status(err.statusCode).json({ message: err.message });
      } else {
        res.status(500).json({ message: 'Something went wrong!' });
      }
    }
  };

  static getUsers = async (req: Request, res: Response) => {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    return res.status(200).json({
      data: users,
    });
  };
}
