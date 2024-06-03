/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext, useState } from "react";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  const authInfo = {
    createUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
