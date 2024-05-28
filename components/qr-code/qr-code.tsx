// // components/QRCodeComponent.js
// import React from "react";
// import QRCode from "qrcode.react";

// const QRCodeComponent = ({ url }: { url: string }) => {
//   return (
//     <div>
//       <h2>Scan this QR Code to Register</h2>
//       <QRCode value={url} />
//     </div>
//   );
// };

// export default QRCodeComponent;

// components/QRCodeComponent.js
import React, { useRef } from "react";
import QRCode from "react-qr-code";
import QRCodeCanvas from "react-qrcode-logo";

const QRCodeComponent = ({ url }) => {
  const qrRef = useRef(null);

  const downloadQRCode = () => {
    const canvas = qrRef?.current?.querySelector("canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr_code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <h2>Scan this QR Code to Register</h2>
      <div ref={qrRef}>
        <QRCodeCanvas value={url} size={256} />
      </div>
      <button onClick={downloadQRCode}>Download QR Code</button>
    </div>
  );
};

export default QRCodeComponent;
