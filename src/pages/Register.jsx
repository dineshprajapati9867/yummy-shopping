import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { isRegister } from "../redux/slices/AuthSlice"; // Import from AuthSlice
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get auth status from Redux
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password.length < 8) {
      setLoading(false);
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    try {
      const response = await fetch("https://yummy-shopping-server.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        toast.success("Registration successful!");
        // Update Redux state instead of local storage
        dispatch(isRegister({ name, email }));
        setTimeout(() => {
          navigate("/");
        }, 1000);
        setName("");
        setEmail("");
        setPassword("");
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="p-8 rounded-lg w-full max-w-md shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-green-800">Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Name input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-green-800 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            />
          </div>
          {/* Email input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-green-800 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            />
          </div>
          {/* Password input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-green-800 font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className={`w-full ${loading ? "bg-gray-400" : "bg-green-500"} text-white font-bold py-2 px-4 rounded-md`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-sm">
          Already have an account?{" "}
          <span className="text-green-500 hover:underline cursor-pointer" onClick={() => navigate("/login")}>
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
