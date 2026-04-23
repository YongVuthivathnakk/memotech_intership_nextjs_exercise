"use client";

import React, { useState } from "react";

function PingButton() {
    // States
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [result, setResult] = useState("");

    
    //Functions
  async function handlePing() {
    setIsLoading(true);
    setIsError(false);

    const url = `${process.env.NEXT_PUBLIC_API_BASE}api/ping`;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();

      setResult(JSON.stringify(data));
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div>
      <button onClick={handlePing}>{isLoading ? "Loading..." : "Echo Ping"}</button>
      <br />
      <p>{isError ? "Something Wrong" : result}</p>
    </div>
  );
}

export default PingButton;
