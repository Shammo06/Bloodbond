import PropTypes from "prop-types";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";

interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextProps {
  user: User | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<void>;
  userLogin: (email: string, password: string) => Promise<void>;
  updateUserInfo: (name: string, img: string) => Promise<void>;
  googleLogin: () => Promise<UserCredential>;
  logOut: () => Promise<void>;
}

interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // create user with email and password
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

  // user login with email and password
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

  // update user's info
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

  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // user logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // check user exist or not
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
    googleLogin,
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
