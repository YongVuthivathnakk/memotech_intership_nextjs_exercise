import React from 'react'

export default async function SlowLoading() {
    //   await new Promise((r) => setTimeout(r, 3000));
    
  return (
      <div className='h-screen w-full flex justify-center items-center animate-pulse'>
          <div className='h-12 bg-gray-300 w-1/8 rounded-lg'></div>
      </div>

  )
}
