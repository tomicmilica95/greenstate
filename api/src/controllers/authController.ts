import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { AppDataSource } from '../dataSource';
import { User } from '../model/User';

export class authController {
  static async auth(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      if (password !== user.password) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET || ''
      );

      res.locals.user = {
        userId: user.id,
        email: user.email,
      };

      res.json({
        message: 'Login successful',
        data: {
          user: res.locals.user,
        },
      });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
