import { cn } from '@/lib/utils'
import { Trash2 } from 'lucide-react'
import React from 'react'


interface TodoItemProps {
    title: string,
    completed: boolean,
    createAt: string,
    
}


export default function TodoItem({title, completed, createAt} : TodoItemProps) {
  return (
      <div className='flex justify-between p-5 rounded-md border-2 broder-gray-500 bg-gray-100'>
          <div className='flex items-center gap-6'>
          <input type="checkbox" />
          <p>
            {title}
          </p>
              
          </div>

          <div className='flex items-center gap-6'>
              <p className={cn(completed ? "bg-emerald-100 text-emerald-500 border-emerald-200" : "bg-amber-100 text-amber-500 border-amber-200", "border-2 text-center px-2 py-1 rounded-md")} >{completed ? "Complete" : "Pending"}</p>
              <button className='p-2 rounded-full text-red-500 cursor-pointer hover:bg-red-100 active:bg-red-200 transition-colors'>
                  <Trash2 className='w-5 h-5'/>
              </button>
          </div>


        </div>
  )
}
