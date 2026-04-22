'use client';


import { useTranslations } from 'next-intl';
import React, { useState } from 'react'

function IncreaseButton() {

    const t = useTranslations("Home");

    const [number, setNumber] = useState(0);

    function click() {
        setNumber(prev => prev + 1);
    }

  return (
      <div>
          <button onClick={click}>
              {t('button')} {number}
          </button>
    </div>
  )
} 

export default IncreaseButton