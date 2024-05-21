"use client";
import useSignup from "@/hooks/useSignup";
import { useState } from "react";
import GenderBox from "./GenderBox";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

function Signup() {
  const router = useRouter();
  //@ts-ignore
  const { authUser } = useAuthContext();

  if (authUser) {
    router.push("/");
  }

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(inputs.password);
    try {
      await signup(inputs);
      setInputs({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
      });
      router.push("/");
    } catch (error) {
      console.log("Error signing up!", error);
    }
  };

  const handleCheckboxChange = (gender: any) => {
    setInputs({ ...inputs, gender });
  };
  return (
    <div className="flex h-screen flex-col justify-center max-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up with{" "}
          <span className="text-violet-600 font-semibold">ChatVision</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              placeholder="Prajwal PL"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              placeholder="praj_2307"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="mt-2">
            <GenderBox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="btn btn-block btn-md mt-2 border border-slate-700"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
          <p className="my-3 font-medium">
            Already have an account?{" "}
            <a className="text-violet-600 font-semibold" href="/login">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
