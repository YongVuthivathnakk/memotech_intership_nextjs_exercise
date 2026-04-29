"use client";

import { useEffect, useState } from "react";

function LocalStorageNote() {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
   const data = localStorage.getItem('local-note');
    if (data) {
      setResult(data);
    }
  }, [])



  

  function handleClick() {
    setResult(input);
    localStorage.setItem('local-note', input);
    setInput('');
  }

  return (
<div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 w-96">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Local Storage Note</h2>

      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter something..."
        className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      {/* <button onClick={getResult} className="w-full border border-gray-300 hover:bg-gray-50  text-sm font-medium rounded-lg py-2 transition mb-4">
        Get From Local Storage
      </button> */}
      <button onClick={handleClick} className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg py-2 transition mb-4">
        Submit
      </button>

      <p className="text-sm text-gray-500">Result: {result}</p>
    </div>
  );
}

export default LocalStorageNote;
