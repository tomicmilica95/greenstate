import { AppDataSource } from '../dataSource';
import { HandlerError } from '../helpers/handleError';
import { User } from '../model/User';
import * as jwt from 'jsonwebtoken';

export class AuthService {
  static async authenticateUser(
    email: string,
    password: string
  ): Promise<{ user: User; token: string }> {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { email } });

    if (!user || password !== user.password) {
      throw new HandlerError(401, 'Invalid credentials');
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || ''
    );

    return { user, token };
  }
}
