import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Uchotels from "../pages/Uchotels";
import LifeAtNile from "../pages/LifeAtNile";
import FindJobs from "../pages/FindJobs";
import ApplyNow from "../component/ApplyNow";
import Awards from "../pages/Awards";
import CareerAdvice from "../pages/CareerAdvice";
import About from "../pages/About";

const Mainroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/uchotels" element={<Uchotels />} />
      <Route path="/findjobs" element={<FindJobs/>} />
      <Route path="/lifeatnile" element={<LifeAtNile />} />
      <Route path="/applynow" element={<ApplyNow />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/careeradvice" element={<CareerAdvice />} />
      
      </Routes>
  );
};

export default Mainroute;
