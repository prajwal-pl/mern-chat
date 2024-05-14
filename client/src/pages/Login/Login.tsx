const Login = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center max-w-96 w-auto mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-400">
          Login with <span className="text-violet-500">ChatVision</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
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
            <button className="btn btn-block btn-md">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
