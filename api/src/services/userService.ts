import { AppDataSource } from '../dataSource';
import { HandlerError } from '../helpers/handleError';
import * as jwt from 'jsonwebtoken';
import { User } from '../model/User';
import { UserRequest } from '../dto/userRequestDto';
import { hashPassword } from '../helpers/hashHelper';
import { UserResponse } from '@/dto/userResponseDto';

export class UserService {
  static validateUser(user: UserRequest): void {
    if (!user.email) {
      throw new HandlerError(400, `email is required`);
    }

    if (!user.password) {
      throw new HandlerError(400, `password is required`);
    }
  }

  static async createUser(user: UserRequest): Promise<User> {
    const userRepository = AppDataSource.getRepository(User);

    const existingUser = await userRepository.findOne({
      where: { email: user.email },
    });
    if (existingUser) {
      throw new HandlerError(400, `User with the same email already exists`);
    }

    const hashedPassword = await hashPassword(user.password);
    const newUser = userRepository.create({
      email: user.email,
      password: hashedPassword,
    });

    await userRepository.save(newUser);
    return newUser;
  }

  static async login(
    user: UserRequest
  ): Promise<{ token: string; user: UserResponse }> {
    const userRepository = AppDataSource.getRepository(User);
    const existingUser = await userRepository.findOne({
      where: { email: user.email },
    });

    if (!existingUser || existingUser.password !== user.password) {
      throw new HandlerError(401, 'Invalid credentials');
    }

    const token = jwt.sign(
      { id: existingUser.id, email: existingUser.email },
      process.env.JWT_SECRET || ''
    );

    return { token, user: existingUser };
  }
}
