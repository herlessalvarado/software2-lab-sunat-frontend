import { createContext } from "react";

const AuthContext = createContext({
  isStartedUp: false,
  isAuthenticated: false,
  login: (token) => {},
  logout: () => {},
});

export default AuthContext;
