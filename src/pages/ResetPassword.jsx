import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://yummy-shopping-server.onrender.com/sendotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        toast.success("OTP sent to your email");
        setOtpSent(true);
      } else {
        toast.error("Failed to send OTP");
      }
    } catch (error) {
      toast.error("An error occurred. Try again.");
    }
    setLoading(false);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setResetLoading(true);
    try {
      const response = await fetch("https://yummy-shopping-server.onrender.com/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
          newPassword,
          confirmPassword,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Password reset successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error(data.message || "Failed to reset password");
      }
    } catch (error) {
      toast.error("An error occurred. Try again.");
    }
    setResetLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="p-8 rounded-md w-full max-w-md bg-white shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-green-800">Reset Password</h2>
        {!otpSent ? (
          <form onSubmit={handleSendOtp}>
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2 text-green-800">
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
            <button
              type="submit"
              className={`w-full ${loading ? "bg-gray-400" : "bg-green-500"} text-white py-2 px-4 rounded-md hover:bg-green-600`}
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword}>
            <div className="mb-4">
              <label htmlFor="otp" className="block font-bold mb-2 text-green-800">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block font-bold mb-2 text-green-800">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                  autoComplete="off"
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block font-bold mb-2 text-green-800">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className={`w-full ${resetLoading ? "bg-gray-400" : "bg-green-500"} text-white py-2 px-4 rounded-md hover:bg-green-600`}
              disabled={resetLoading}
            >
              {resetLoading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
