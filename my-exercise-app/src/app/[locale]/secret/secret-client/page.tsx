"use client";

import React from 'react'

export default function SecretClientPage() {
    const secret = process.env.SECRET_EXERCISE;
    const label = process.env.NEXT_PUBLIC_EXERCISE_LABEL; // if env starts with NEXT_PUBLIC_ it will show in client component
  return (
      <div>
          <p>Lable: {label}</p>
          <p>Secret Exercise: {secret ? "yes" : "no"}</p>
    </div>
  )
}
