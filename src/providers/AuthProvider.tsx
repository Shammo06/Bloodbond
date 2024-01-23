import PropTypes from "prop-types";
import React, { ReactNode, createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<void>;
}

interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

const auth = getAuth(app);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo: AuthContextProps = { createUser, user, loading };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
