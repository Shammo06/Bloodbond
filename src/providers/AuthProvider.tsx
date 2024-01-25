import PropTypes from "prop-types";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextProps {
  user: User | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<void>;
  userLogin: (email: string, password: string) => Promise<void>;
  updateUserInfo: (name: string, img: string) => Promise<void>;
  logOut: () => Promise<void>;
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

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result.user);
    } catch (error) {
      console.log("Error creating user:", error);
      throw error;
    }
  };

  const userLogin = async (email: string, password: string): Promise<void> => {
    setLoading(true);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result.user);
    } catch (error) {
      console.log("Error creating user:", error);
      throw error;
    }
  };

  const updateUserInfo = async (name: string, img: string) => {
    setLoading(true);

    const currentUser = auth.currentUser;

    if (currentUser) {
      try {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: img,
        });
      } catch (error) {
        console.log("Error updating user info:", error);
        throw error;
      }
    }
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo: AuthContextProps = {
    createUser,
    user,
    loading,
    userLogin,
    updateUserInfo,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
