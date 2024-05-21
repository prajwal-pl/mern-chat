"use client";
import { useAuthContext } from "@/context/AuthContext";
import useLogin from "@/hooks/useLogin";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  //@ts-ignore
  const { authUser } = useAuthContext();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (authUser) {
    router.push("/");
  }

  const { loading, login } = useLogin();

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      await login({ username, password });
      router.push("/");
    } catch (error) {
      console.log("Error logging in!", error);
    }
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center max-w-96 w-auto mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-400">
          Login with <span className="text-violet-500">ChatVision</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Prajwal PL"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <p className="font-semibold my-3">
            New user?{" "}
            <a className="font-semibold text-violet-500" href="/signup">
              Register
            </a>
          </p>
          <div>
            <button onClick={handleSubmit} className="btn btn-block btn-md">
              {loading ? <span className="loading loading-spinner" /> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
