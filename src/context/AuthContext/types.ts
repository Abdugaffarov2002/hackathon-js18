import { TUser } from "../../models/user";

export interface IAuthContextTypes {
  user: TUser;
  register: (credentials: IUserCredentials) => void;
  login: (credentials: IUserCredentials) => void;
  logout: () => void;
  isAdmin: () => boolean;
}

export interface IUserCredentials {
  email: string;
  password: string;
}
