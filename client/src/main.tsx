import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Login from "./pages/Login/Login.tsx";
import Signup from "./pages/Signup/Signup.tsx";
import App from "./App.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <AuthContextProvider>
      <App />
      <Toaster />
    </AuthContextProvider> */}
  </React.StrictMode>
);
