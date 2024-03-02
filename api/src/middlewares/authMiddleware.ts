import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../model/User';

interface UserToken extends jwt.JwtPayload {
  user: User;
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      throw new Error();
    }

    const decodedToken: UserToken = jwt.verify(
      token,
      process.env.JWT_SECRET || ''
    ) as UserToken;

    const { email } = decodedToken.user;
    res.locals.token = {
      email,
    };

    next();
  } catch (err) {
    res.status(401).json({ message: `Invalid token!` });
  }
};
