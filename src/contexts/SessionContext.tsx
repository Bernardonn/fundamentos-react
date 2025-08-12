import { Children, createContext, ReactNode, use, useContext, useState } from "react";

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

const SessionConxtext = createContext({} as sessionConxtextData);

interface SessionProviderProps {
  children: ReactNode;
}

export function SessionProvider({children}: SessionProviderProps) {

  const [user, setUser] = useState<User>({} as User);
  async function updateUser(user: User) {
    setUser(user);
  }

  return (
    <SessionConxtext.Provider value={{ user, updateUser }}>
      {children}
    </SessionConxtext.Provider>
  );
}

export const useSession = () => useContext(SessionConxtext);
