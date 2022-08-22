import React from "react";
import { useNavigate, useLocation, Outlet, Navigate } from "react-router-dom";
function UnProtectedRoutes({ children }) {
  const location = useLocation();
  if (JSON.parse(localStorage.getItem("/auth/info"))) {
    return <Navigate to="/dashboard" state={{ from: location.pathname }} />;
  }
  return <Outlet />;
}

export default UnProtectedRoutes;
