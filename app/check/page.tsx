"use client";
import DownloadButton from "@/components/button-c/button-component";
import React from "react";
// import { getAccessToken } from "utils/auth";

const HomePage = ({ isOpen, message }: any) => {
  return (
    <div>
      <h1>Fetched Data</h1>
      <DownloadButton />
      <h1>Status: {isOpen ? "Open" : "Closed"}</h1>
      <p>Message: {JSON.stringify(message, null, 2)}</p>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default HomePage;
