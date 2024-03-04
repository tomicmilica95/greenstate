import { AppDataSource } from '../dataSource';
import { HandlerError } from '../helpers/handleError';
import { User } from '../model/User';
import { comparePassword } from '../helpers/hashHelper';
import { UserRequest } from '../dto/userRequestDto';
import * as jwt from 'jsonwebtoken';

export class AuthService {
  static async authenticateUser(
    user: UserRequest
  ): Promise<{ user: User; token: string }> {
    const userRepository = AppDataSource.getRepository(User);
    const existingUser = await userRepository.findOne({
      where: { email: user.email },
    });

    if (!existingUser) {
      throw new HandlerError(401, 'Invalid credentials');
    }

    const passwordMatch = await comparePassword(
      user.password,
      existingUser?.password
    );

    if (!passwordMatch) {
      throw new HandlerError(401, 'Invalid credentials');
    }

    const token = jwt.sign(
      { id: existingUser.id, email: existingUser.email },
      process.env.JWT_SECRET || ''
    );

    return { user: existingUser, token };
  }
}
