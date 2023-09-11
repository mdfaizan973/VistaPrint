// import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import NavHover from "../Pages/NavHover";
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hovernav" element={<NavHover />}></Route>
      </Routes>
    </div>
  );
}
