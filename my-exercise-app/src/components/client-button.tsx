"use client";
export default function ClientButton() {
    fetch('/api/demo-cookie')

    
    function handleClick() {
        console.log(document.cookie)
    }

  return (
     <button onClick={handleClick}  className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg py-2 transition mb-4">
        Show console
      </button>
  )
}
