'use client';

import React, { useEffect, useState } from 'react'

function SessionNote() {

    const [value, setValue] = useState('');
    const [save, setSave] = useState('');

    useEffect(() => {
        const stored = sessionStorage.getItem('tab');
        if (stored) setSave(save);
    }, [])

    function handleSave() {
        sessionStorage.setItem("tab", value);
        setSave(value);
    }
  return (
                
          
      <div>
          <h2>SessionNote</h2>
          <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type something..."
          />
          
           <button onClick={handleSave}>Save</button>
      {save && <p>Stored value: {save}</p>}
    </div>
  )
}

export default SessionNote