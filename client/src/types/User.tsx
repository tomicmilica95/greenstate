export type User = {
  id: string;
  email: string;
  password: string;
};

export type UserState = {
  user: User | null;
  loading: boolean;
  error: boolean;
};

export type UserPayload = {
  email: string;
  pasword: string;
};

export type LoginResponse = {
  user: User;
  token: string;
};
