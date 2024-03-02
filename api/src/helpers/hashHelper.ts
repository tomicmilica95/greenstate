import * as bcrypt from 'bcrypt';

export const hashPassword = async (plainPassword: string) => {
  const password = await bcrypt.hash(plainPassword, 10);
  return password;
};
