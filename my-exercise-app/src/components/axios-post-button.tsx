"use client";

import { useState } from "react";
import axios from "../../lib/axios";

export default function AxiosPostButton() {

    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState("");
    const [isError, setIsError] = useState(false);

    async function handlePost() {
        setIsLoading(false);
        setIsError(false);
        try {
            const { data } = await axios.post("api/echo", { message: "hello" });
            setResult(data.echo);
        } catch (e) {
            setIsError(true);
            console.log(e);
        } finally {
            setIsLoading(false);
        }
        
    };

  return (
      <div>
          <button onClick={handlePost}>
                {isLoading ? "Loading..." : "Axios Post"}
          </button>
          <p>
              {
                  isError ? "Something Wrong" : result
              }
          </p>
    </div>
  )
}
