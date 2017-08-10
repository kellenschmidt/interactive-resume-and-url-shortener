import { User } from './user';

export interface AuthenticationData {
  token: string;
  user: User;
}