import { createContext } from "react";

const AuthContext = createContext({
  isStartedUp: false,
  isAuthenticated: false,
});

export default AuthContext;
