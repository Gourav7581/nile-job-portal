import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Uchotels from "../pages/Uchotels";
import LifeAtNile from "../pages/LifeAtNile";
import FindJobs from "../pages/FindJobs";

const Mainroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/uchotels" element={<Uchotels />} />
      <Route path="/findjobs" element={<FindJobs/>} />
      <Route path="/lifeatnile" element={<LifeAtNile />} />
      
      </Routes>
  );
};

export default Mainroute;
