import { cookies } from "next/headers";
import ClientButton from "./client-button";


async function CookieStorage() {
  
    const cookieStore = await cookies();
    const isPresent = cookieStore.has('demo');

  return (
<div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 w-96">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Session Note</h2>
          
          <p className="w-full bg-gray-50 text-gray-500 border border-gray-200 rounded-lg px-4 py-2 text-sm mb-4">
              Have cookie: {isPresent ? "Yes" : "No"}
          </p>

               <ClientButton />

    </div>
  );
}

export default CookieStorage;
