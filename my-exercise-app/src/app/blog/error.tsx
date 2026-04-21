"use client";

import React, { useEffect } from 'react'

export default function BlogErrorPage({ error, unstable_retry }: { error: Error & { dgest?: string }, unstable_retry: () => void }) {
    useEffect(() => {
        console.log(error);

    }, [error]);
  return (
      <div>
          <p>Try Again</p>
          <button onClick={
              () => {
                  unstable_retry();
              }
          }>Retry</button>
    </div>
  )
}
