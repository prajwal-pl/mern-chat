"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";
import toast from "react-hot-toast";

type LoginProps = {
  username: string;
  password: string;
};

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  //@ts-ignore
  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }: LoginProps) => {
    const success = handleInputErrors({ username, password });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setAuthUser(data);

      if (res.ok) {
        toast.success(`Welcome back ${data.user.fullName}!`);
      }
    } catch (error: any) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

const handleInputErrors = ({ username, password }: LoginProps) => {
  if (!username || !password) {
    toast.error("All fields are neccessary!");
    return false;
  }
  return true;
};
