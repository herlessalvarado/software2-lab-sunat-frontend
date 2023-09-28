import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import Cookies from "js-cookie";
import { api } from "../../services/axios";

const setupInterceptors = () => {
  api.interceptors.request.use(async (request) => {
    const token = Cookies.get("jwtToken");
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  });
};

const AuthProvider = ({ children }) => {
  const [isStartedUp, setIsStartedUp] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function startup() {
      setupInterceptors();
      setIsAuthenticated(!!Cookies.get("jwtToken"));
      setIsStartedUp(true);
    }

    startup();
  }, []);

  const login = (token) => {
    Cookies.set("jwtToken", token, { expires: 7 });
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove("jwtToken");
    setIsAuthenticated(false);
  };

  const contextValue = {
    isStartedUp,
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
