import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  if (!JSON.parse(localStorage.getItem("/auth/info"))) {
    navigate("/", { state: { from: location.pathname } });
  }
  return <Outlet />;
}

export default ProtectedRoutes;
