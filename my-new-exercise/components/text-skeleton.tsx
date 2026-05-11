import React from 'react'

export default function TextSkeleton() {
  return (
    <div className='flex flex-col gap-2  w-full animate-pulse'>
          <div className='bg-gray-300 h-3'></div>
        <div className= 'mx-auto bg-gray-300 h-3 w-1/3'></div>
          
    </div>
  )
}
