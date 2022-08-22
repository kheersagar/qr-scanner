import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import TicketDetails from "./pages/TicketDetails";
import Header from "./components/Header";
import QrScan from "./pages/QrScan";
import Check from "./pages/Check";
import UnProtectedRoutes from "./components/UnprotectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<UnProtectedRoutes />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Header />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/getTicketDetails/:id"
              element={<TicketDetails />}
            ></Route>
            <Route path="/scan-qr" element={<QrScan />}></Route>
            <Route path="/check-number" element={<Check />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
