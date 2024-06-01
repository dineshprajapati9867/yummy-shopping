import React, { useState, useEffect } from "react"; // Import useState
import { useNavigate } from "react-router-dom";
import logoImg from "../images/letter-y.png";
import SearchBar from "./SearchBar";
import { CgProfile } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import Profile from "./Profile";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <>
      <nav className="sticky bg-slate-200 lg:bg-white top-0 flex flex-col lg:flex-row justify-between items-center py-3 lg:mb-10 w-full lg:w-full lg:py-5">
        <div
          className="flex items-center absolute lg:left-4 left-2 top-4 lg:gap-1 mb-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logoImg} className="lg:w-[50px] w-[30px]" alt="logo" />
          <h1 className="lg:text-2xl text-xl font-bold">ummy</h1>
        </div>
        <SearchBar />
        <CgProfile
          className={`lg:text-4xl absolute top-5 right-4 lg:right-3 lg:top-6 text-3xl   cursor-pointer ${
            toggleNav && "hidden"
          } transition-all ease-in-out duration-500`}
          onClick={() => setToggleNav(true)}
        />
        <MdClose
          className={`lg:text-4xl absolute top-5 right-4 lg:right-3 lg:top-6 text-3xl   cursor-pointer
        ${!toggleNav && "hidden"} 
          transition-all ease-in-out duration-500`}
          onClick={() => setToggleNav(false)}
        />
        <Profile toggleNav={toggleNav} setToggleNav={setToggleNav} />
      </nav>
    </>
  );
};

export default Navbar;
