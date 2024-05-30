import React, { useState } from "react"; // Import useState
import { useNavigate } from "react-router-dom";
import logoImg from "../images/letter-y.png";
import SearchBar from "./SearchBar";

const Navbar = () => { // Assuming auth is passed as a prop
  const navigate = useNavigate();

  return (
    <>
      <nav className="sticky bg-slate-200 lg:bg-white top-0 flex flex-col lg:flex-row justify-between items-center py-3 lg:mb-10 w-full lg:w-[98vw]">
        <div
          className="flex items-center absolute lg:left-4 left-2 top-4 lg:gap-1 mb-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logoImg} className="lg:w-[50px] w-[30px]" alt="logo" />
          <h1 className="lg:text-2xl text-xl font-bold">ummy</h1>
        </div>
        <SearchBar />
           
      </nav>
    </>
  );
};

export default Navbar;
