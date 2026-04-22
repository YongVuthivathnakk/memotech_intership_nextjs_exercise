
import CookieChecker from "@/components/cookie-checker";
import CookieStatus from "@/components/cookie-status";
import LocalStorageNote from "@/components/locastorage-note";
import SessionNote from "@/components/session-note";

function NotePage() {

    
  return (
    <div>
  
          <LocalStorageNote />
          <br />
          <br />
          <SessionNote />
          <br />
          <br />
          <CookieStatus />
          <br />
          <br />
          <CookieChecker/>
    </div>
  );
}

export default NotePage;
