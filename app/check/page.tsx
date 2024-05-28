"use client";
import DownloadButton from "@/components/button-c/button-component";
import React from "react";
// import { getAccessToken } from "utils/auth";

const HomePage = ({ isOpen, message }: any) => {
  console.log(
    "added to check creating it , then i'll push it and then I reset --hard it and then push to remote"
  );
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
