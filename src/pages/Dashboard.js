import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Verify Ticket</h1>
      <div className="options-row">
        <div className="options">
          {" "}
          <NavLink className="nav-link" to="/scan-qr">
            Scan Qr
          </NavLink>
        </div>
        <div className="options">
          {" "}
          <NavLink className="nav-link" to="/check-number">
            Check Ticket Number
          </NavLink>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Dashboard;
