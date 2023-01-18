import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/UserDashboard" />;
  }
  
//   elseif(user.role === "admin"){
//     return <Navigate to="/AdminDashboard" />;
//     }
  return children;

};

export default ProtectedRoute;
