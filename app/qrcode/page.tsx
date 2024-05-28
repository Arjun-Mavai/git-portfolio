"use client";
// pages/index.js
import QRCodeComponent from "@/components/qr-code/qr-code";
import React from "react";

const HomePage = () => {
  const registrationUrl = "https://registration.comex-global.com";

  return (
    <div>
      <h1>Welcome to the Event</h1>
      <QRCodeComponent url={registrationUrl} />
    </div>
  );
};

export default HomePage;
