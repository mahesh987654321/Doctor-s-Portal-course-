import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import auth from "../firebaseInit";
const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
export default RequireAuth;
