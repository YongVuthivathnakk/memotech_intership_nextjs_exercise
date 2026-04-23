"use client";

import { useState } from "react";

export default function FetchPostButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [result, setResult] = useState("");

  async function handlePost() {
    setIsLoading(true);
    setIsError(false);
    const url = "http://localhost:3000/api/echo";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "hello" }),
      });

      if (!response.ok) throw new Error(`Status ${response.status}`);

      const data = await response.json();
      setResult(data.echo);
    } catch (e) {
      console.error(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

    return (<div>
        <button onClick={handlePost}>{isLoading ? "Loading..." : "Fetch Post"}</button>
        <br />
        <p>{isError ? "Something wrong" : result}</p>
  </div>);
}
