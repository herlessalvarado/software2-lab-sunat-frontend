import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import useAuth from "./state/Auth/useAuth";

function AppRoutes() {
  const { isStartedUp, isAuthenticated } = useAuth();

  return (
    <>
      {isStartedUp && (
        <Routes>
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={isAuthenticated ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      )}
    </>
  );
}

export default AppRoutes;
