import React from 'react'

export default function AppLayout({children} : {children: React.ReactNode}) {
  return (
      <div>
          <nav className='py-4 shadow-sm bg-gray-50 text-center'>App</nav>
          {children}
    </div>
  )
}
