import React from 'react'

interface RenderTImeProps {
    time: string
}


function RenderTime({ time } : RenderTImeProps) {
  return (
      <div>Render Time: {time} </div>
  )
}

export default RenderTime