import bcrypt from 'bcrypt';

export const hashPassword = async (plainPassword: string) => {
  const password = await bcrypt.hash(plainPassword, 10);
  return password;
};
export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(plainPassword, hashedPassword);
};
