import { cookies } from "next/headers";

export default async function CookieStatus() {
  const cookieStore = await cookies();
  const secret = cookieStore.get("secret");

  return (
    <div>
      <h2>HTTP Cookie (Server)</h2>
      <p>
        secret is: <strong>{secret ? "yse" : "no"}</strong>
      </p>
      <p >
        Value is intentionally hidden 
      </p>
    </div>
  );
}
