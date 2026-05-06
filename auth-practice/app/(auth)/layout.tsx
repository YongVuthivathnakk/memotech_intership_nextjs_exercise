

import { getCurrentUser } from '@/core/auth/currentUser';
import React from 'react'

interface AuthLayoutProps {
    children: React.ReactNode;
}
export default async function AuthLayout({children} : AuthLayoutProps) {
  
    const user = await getCurrentUser();
  
    return (
      <div >
          <nav>
              <a href="/">Home</a>
          </nav>
          <div className='my-40 mx-160'>
          {children}
              
          </div>
      </div>
  )
}
