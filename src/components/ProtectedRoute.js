import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.user);

  if (!user.token) {
    return <Navigate to="/loginregister" replace />;
  }
  return children;
}
export default ProtectedRoute;
