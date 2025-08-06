import { createContext } from "react";

type User = {
  id: string;
  cpf: string;
  email: string;
  fullName: string;
  avatarUrl: string;
}

type sessionConxtextData = {
  user: User;
  updateUser: (user: User) => Promise<void>;
}

const sessionConxtext = createContext();
