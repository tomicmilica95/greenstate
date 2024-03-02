import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { AppDataSource } from '../dataSource';
import { HandlerError } from '../helpers/handleError';
import { User } from '../model/User';
import { UserRequest } from '../dto/userRequestDto';
import { UserService } from '../services/userService';

export class UserController {
  static create = async (req: Request, res: Response): Promise<void> => {
    try {
      const user: UserRequest = {
        userId: req.body.id,
        email: req.body.email,
        password: req.body.password,
      };

      UserService.validateUser(user);

      const newUser = await UserService.createUser(user);

      const token = jwt.sign({ user: newUser }, process.env.JWT_SECRET || '');

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
