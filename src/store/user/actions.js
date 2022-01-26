import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { googleAuthProvider } from "../../firebase/firebase";

export const startLogin = () => {
  return () => {
    const auth = getAuth();
    return signInWithPopup(auth, googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    const auth = getAuth();
    return signOut(auth);
  };
};
