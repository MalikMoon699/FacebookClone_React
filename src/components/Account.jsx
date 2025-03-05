import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./login";
import Signup from "./SignUp";

const Account = ({ setUser }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default Account;
