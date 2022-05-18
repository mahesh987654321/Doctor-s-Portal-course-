import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import auth from "../firebaseInit";
import UserAdmin from "../Hooks/UserAdmin";
const RequireAdmin = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, setLoading] = UserAdmin(user);
  let location = useLocation();
  if (loading ) {
    return <Spinner></Spinner>;
  }
  if (!user || !admin) {
    // signOut(auth);
    // return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
export default RequireAdmin;
