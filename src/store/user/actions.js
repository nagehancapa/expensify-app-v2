import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { googleAuthProvider } from "../../firebase/firebase";

export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const startLogin = () => {
  return () => {
    const auth = getAuth();
    return signInWithPopup(auth, googleAuthProvider);
  };
};

export const logout = (uid) => ({
  type: "LOGOUT",
});

export const startLogout = () => {
  return () => {
    const auth = getAuth();
    return signOut(auth);
  };
};
