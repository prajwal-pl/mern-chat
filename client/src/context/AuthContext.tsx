import { createContext, ReactNode, useContext, useState } from "react";

//@ts-ignore
export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

type Props = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")!) || null
  );
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
