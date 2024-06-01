import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/AuthSlice"; // Adjust the import path based on your project structure
import { toast } from "react-hot-toast";

const Profile = ({ toggleNav, setToggleNav }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);
  console.log(auth);
 
  const handleLogout = () => {
    dispatch(logoutUser());
    // localStorage.clear()
    toast.success("Logged out successfully");
  };

  return (
    <div
      className={`${
        !toggleNav && "translate-x-[200px]"
      } fixed top-16 right-1 lg:right-4 p-3 w-fit bg-white bg-opacity-10 backdrop-blur-sm flex flex-col justify-center items-start rounded-lg shadow-md border border-white font-bold text-gray-600 transition-all duration-500 ease-in-out`}
    >
      {auth ? (
        <li
          onClick={handleLogout}
          className="hover:text-black select-none list-none cursor-pointer"
        >
          Logout
        </li>
      ) : (
        <div className="flex flex-col">
          <Link to="/login" className="hover:text-black select-none">
            Login
          </Link>
          <Link to="/signup" className="hover:text-black select-none">
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
