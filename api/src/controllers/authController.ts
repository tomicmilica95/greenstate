import { Request, Response } from 'express';

import { AuthService } from '../services/authService';
import { HandlerError } from '../helpers/handleError';
import { UserRequest } from '../dto/userRequestDto';

export class AuthController {
  static authenticate = async (req: Request, res: Response) => {
    try {
      const user: UserRequest = {
        email: req.body.email,
        password: req.body.password,
      };
      const { token, user: loggedInUser } = await AuthService.authenticateUser(
        user
      );

      res.locals.user = {
        id: loggedInUser.id,
        email: loggedInUser.email,
      };

      res.json({
        user: res.locals.user,
        token: token,
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
