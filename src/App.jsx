import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import FoodDetails from "./pages/FoodDetails";
import Success from "./pages/Success";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/food/:id/:name/:price/:desc/:rating/:img"
            element={<FoodDetails />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/*" element={<Error />} />
           <Route path="/login" element={<Login/>} />
           <Route path="/signup" element={<Signup/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
