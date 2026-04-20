'use client';


import React, { useState } from 'react'

function IncreaseButton() {
    const [number, setNumber] = useState(0);

    function click() {
        setNumber(prev => prev + 1);
    }

  return (
      <div>
          <button onClick={click}>
              Click Me {number}
          </button>
    </div>
  )
} 

export default IncreaseButton