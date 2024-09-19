import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { isLogged } from "../redux/slices/AuthSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLogged);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://yummy-shopping-server.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(isLogged(true)); // Update Redux state
        toast.success("Login successful!");
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 1000);
      } else {
        toast.error(data.message || "Login failed");
        setLoading(false);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="p-8 rounded-lg w-full max-w-md shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-green-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-green-800 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-green-800 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className={`w-full ${loading ? "bg-gray-400" : "bg-green-500"} text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-200`}
            disabled={loading}
          >
            {loading ? "Logging..." : "Login"}
          </button>
        </form>
        <div className="mt-4 text-gray-600 text-sm">
          Don't have an account?{" "}
          <div className="flex justify-between">
            <span
              className="text-green-500 hover:underline cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register here
            </span>
            <span
              className="text-green-500 hover:underline cursor-pointer"
              onClick={() => navigate("/reset-password")}
            >
              Reset Password
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
