import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Cookies from "js-cookie";

function App() {
  const isAuthenticated = !!Cookies.get("jwtToken");

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login />} />
    </Routes>
  );
}

export default App;
