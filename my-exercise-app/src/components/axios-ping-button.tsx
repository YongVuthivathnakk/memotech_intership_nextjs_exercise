"use client";

import { useState } from "react";
import axios from "../../lib/axios";
function AxiosPingButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [result, setResult] = useState("");

  async function handleClick() {
    setIsError(false);
    setIsLoading(true);

    try {
      const { data } = await axios.get("api/ping");
      setResult(JSON.stringify(data));
    } catch (e) {
      console.log(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>{isLoading ? "Loading..." : "Axios Ping"}</button>
      <p>{isError ? "Something Wrong" : result}</p>
    </div>
  );
}

export default AxiosPingButton;
