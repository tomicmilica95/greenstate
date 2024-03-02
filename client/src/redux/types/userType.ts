export const AUTH_USER = 'AUTH_USER';

export interface AuthUserRequest {
  type: typeof AUTH_USER;
}

export type UserAction = AuthUserRequest;
