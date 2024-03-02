import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserToken extends jwt.JwtPayload {
  userId?: number;
  user?: {
    id: number;
    email: string;
  };
}

export const AuthMiddleware = (
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

    if (!decodedToken.id && !decodedToken.user?.email) {
      throw new Error('Invalid token structure');
    }

    res.locals.currentUser = {
      id: decodedToken.id || decodedToken.user?.id,
      email: decodedToken.email || decodedToken.user?.email,
    };

    next();
  } catch (err) {
    res.status(401).json({ message: `Invalid token!` });
  }
};
