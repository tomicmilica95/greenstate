import { Request, Response } from 'express';

import { AuthService } from '../services/authService';
import { HandlerError } from '../helpers/handleError';

export class AuthController {
  static authenticate = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const { user, token } = await AuthService.authenticateUser(
        email,
        password
      );

      res.locals.user = {
        id: user.id,
        email: user.email,
      };

      res.json({
        message: 'Login successful',
        data: {
          user: res.locals.user,
          token: token,
        },
      });
    } catch (err) {
      if (err instanceof HandlerError) {
        res.status(err.statusCode).json({ message: err.message });
      } else {
        res.status(500).json({ message: 'Something went wrong!' });
      }
    }
  };
}
