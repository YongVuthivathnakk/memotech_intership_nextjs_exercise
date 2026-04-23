'use client';

import { useState } from 'react'

function CookieChecker() {

    const [cookies, setCookies] = useState('');


  return (
      <div>
      <h2>cookie (Client)</h2>
      <p>Visible cookies: <code>{cookies || 'none'}</code></p>
      <p >
        secret won't show here
      </p>

      <button onClick={() => setCookies(document.cookie)}>
        set cookie
      </button>
    </div>
  )
}

export default CookieChecker