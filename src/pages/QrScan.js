import React, { useEffect, useState } from "react";
// import { QrScanner } from "react-qrcode-scanner";
import { QrScanner } from "@yudiel/react-qr-scanner";
import "../styles/dashboard.css";
function QrScan() {
  const [data, setData] = useState("No result");
  function handleError(err) {
    console.error(err);
  }
  function handleScan(data) {
    setData(data);
    window.location.href = data;
  }
  useEffect(() => {
    setData("");
  }, []);
  return (
    <div className="dashboard-cont">
      <h1>Scan QR</h1>
      <div className="qr-cont">
        <QrScanner
          scanDelay={1000}
          onDecode={handleScan}
          onError={handleError}
        />
      </div>
      <div>{data}</div>
      <div></div>
    </div>
  );
}

export default QrScan;
