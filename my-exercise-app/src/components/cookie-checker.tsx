'use client';

import React, { useEffect, useState } from 'react'

function CookieChecker() {

    const [cookies, setCookies] = useState('');


    useEffect(() => {
        setCookies(document.cookie);
    }, []) 

  return (
      <div>
      <h2>cookie (Client)</h2>
      <p>Visible cookies: <code>{cookies || 'none'}</code></p>
      <p className="">
        secret won't show here
      </p>
    </div>
  )
}

export default CookieChecker