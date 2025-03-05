import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Friends from "./Friends";
import Group from "./Group";
import Navbar from "./Navbar";
import LinkNav from "./LinkNav";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="display">
        <LinkNav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/group" element={<Group />} />
      </Routes>
    </>
  );
};

export default Main;
