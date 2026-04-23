"use client";

import { useEffect, useState } from 'react'

function LocalStorageNote() {

      const [note, setNote] = useState("");
    const [saved, setSaved] = useState("");


    // get item when request
    useEffect(() => {
        const stored = localStorage.getItem('note')
        if (stored) setSaved(stored)
    }, [])


    const handleSave = () => {
        localStorage.setItem('note', note);
        setSaved(note);
    }
    
    return (
      <div>
            
          <h2>LocalStorage</h2>
        <input
          type="text"
          value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Type something..."
            />
            <button onClick={handleSave}>
              Save data
            </button>
            {saved && <p>Stored Value: {saved}</p>}
      </div>
  )
}

export default LocalStorageNote