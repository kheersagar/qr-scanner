import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

import "../styles/dashboard.css";
function Dashboard() {
  const [data, setData] = useState("No result");
  const previewStyle = {
    height: 240,
    width: 320,
  };
  function handleError(err) {
    console.error(err);
  }
  function handleScan(data) {
    console.log("sada");
    setData(data);
  }
  return (
    <div className="dashboard-cont">
      <div>Dashboard</div>
      <div className="qr-cont">
        <QrReader
          style={previewStyle}
          constraints={{ facingMode: "environment" }}
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
              window.location.href = result?.text;
            }

            if (!!error) {
              console.info(error);
            }
          }}
        />
        <p>{data}</p>
      </div>
    </div>
  );
}

export default Dashboard;
