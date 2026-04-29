import CookieStorage from "@/components/cookie-note";
import LocalStorageNote from "@/components/local-storage-note";
import SessionStorageNote from "@/components/session-storage-note";


function NotePage() {

    
  return (
    <div className="p-16 flex gap-8">
      <LocalStorageNote />
      <SessionStorageNote />
      <CookieStorage />
    </div>
  );
}

export default NotePage;
