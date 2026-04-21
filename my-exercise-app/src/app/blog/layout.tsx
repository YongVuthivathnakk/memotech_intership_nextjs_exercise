import { Metadata } from "next";
import Link from "next/link";


export const metatdata: Metadata = {
  title: "Blogs",
}


export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>
              <Link href={"/blog/first-blog"}>First-Blog &nbsp;</Link>
        <Link href={"/blog/second-blog"}>Second-Blog</Link>
              
      </nav>
      <main>{children}</main>
    </>
  );
}
