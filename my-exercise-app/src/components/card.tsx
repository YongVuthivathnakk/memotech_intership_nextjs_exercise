"use client";

interface CardProps {
    title: string;
    description: string;
    tag: string;
    status: string;
    button: {
        label: string;
        onClick: () => void;
    }

}


export default function Card({title, description, tag, status, button} : CardProps) {
  return (
      <div className="flex flex-col gap-3 border-2 rounded-lg p-4 border-gray-300">
          <div className="flex justify-between">
            <p className="text-xs text-blue-500 border border-blue-500 px-2 rounded-lg ">{status}</p>
            <p className="text-xs text-gray-500">{tag}</p>
          </div>
              
            <h2 className="text-center text-xl">{title}</h2>
              
          <p className="text-sm">{description}</p>
          <button onClick={button.onClick} className="bg-blue-600 p-1 rounded-2xl cursor-pointer hover:bg-blue-400 text-white transition-all">{button.label}</button>
    </div>
  )
}
