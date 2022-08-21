import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";

import "../styles/dashboard.css";
function Dashboard() {
  const [data, setData] = useState("No result");
  const [isScanning, setIsScanning] = useState(true);
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
  useEffect(() => {
    setData("");
  }, []);
  return (
    <div className="dashboard-cont">
      <h1>Scan QR</h1>
      <div className="qr-cont">
        {isScanning && (
          <QrReader
            style={previewStyle}
            constraints={{ facingMode: "environment" }}
            onResult={(result, error) => {
              if (!!result && isScanning) {
                setData(result?.text);
                setIsScanning(false);
                const a = document.createElement("a");
                a.href = result?.text;
                // a.target = "_blank";
                a.click();
              }

              if (!!error) {
                console.info(error);
              }
            }}
          />
        )}
      </div>
      <div>{isScanning ? "Scanning..." : "error"}</div>
      <div>{data}</div>
      <div>
        <button onClick={() => setIsScanning(false)}>Scan</button>
      </div>
    </div>
  );
}

export default Dashboard;
