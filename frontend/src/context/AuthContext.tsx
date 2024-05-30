"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
//@ts-ignore
export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

type Props = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [authUser, setAuthUser] = useState("");

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
