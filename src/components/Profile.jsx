import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector to check auth state
import { logout } from "../redux/slices/AuthSlice";
import { toast } from "react-hot-toast";

const ProfileIcon = ({ toggleNav }) => {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.auth.isAuth);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
  };

  return (
    <div
      className={`${
        toggleNav ? "translate-x-0" : "translate-x-[200px]"
      } fixed top-16 right-1 lg:right-4 p-3 w-fit bg-white bg-opacity-10 backdrop-blur-sm flex flex-col justify-center items-start rounded-lg shadow-md border border-white font-bold text-gray-600 transition-all duration-500 ease-in-out`}
    >
      {isLogged ? (
        <>
          <li
            onClick={handleLogout}
            className="hover:text-black select-none list-none cursor-pointer"
          >
            Logout
          </li>
        
        </>
      ) : (
        <div className="flex flex-col">
          <Link to="/login" className="hover:text-black select-none">
            Login
          </Link>
          <Link to="/register" className="hover:text-black select-none">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
