import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import FoodDetails from "./pages/FoodDetails";
import Success from "./pages/Success";

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
        
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
